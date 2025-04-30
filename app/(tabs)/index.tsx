import { Pressable, Text, TouchableOpacity, View, StyleSheet, FlatList, Dimensions, ScrollView } from "react-native";
import { Link } from "expo-router";
import LogOut from "@/components/Logout";
import { BlurView } from "expo-blur"
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "@/api/myApi";

import { formatDate } from "@/lib/formatDate";
import Loader from "@/components/Loader";
import Error from "@/components/Error";




export default function Home() {

  const { data, isError, isLoading } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos
  })

  if (isLoading) {
    return (
      <Loader/>
    )
  }

  if (isError) {
    return (
     <Error/>
    )
  }

  const { newVideos, oldVideos } = data as any;

  
  return (

    <LinearGradient colors={["#26282C", "#35373B"]} style={styles.linear}>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{paddingBottom:20}}
       style={{flex:1}}>
      <BlurView intensity={20} tint="light" style={styles.headerContainer}>

        <Image source={require('@/assets/images/logo.svg')}
          style={styles.logo}
          contentFit="contain"
        />

        <Pressable>
          <Ionicons name="search-outline" size={30} color={"#00FFAB"} />
        </Pressable>
      </BlurView>

      {/* <View>
        <LogOut />
      </View> */}
      {/* TOP NEW VIDEOS */}
      <View style={styles.videoContainer}>
        <Text style={styles.newVideo}>New Videos</Text>
        <FlatList
        data={newVideos}
        keyExtractor={(item)=> item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap:8}}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.videoCardHorizontal}>
            <Image
            style={styles.thumbnailHorizontal}
            source={{uri:item?.thumbnailUrl}}
            contentFit="cover"
            />
          <Text style={styles.videoTitle}>{item?.title}</Text>
          <Text style={styles.Date}>{formatDate(item?.createdAt)}</Text>
          </TouchableOpacity>
        )}
        />
      </View>

      <View style={styles.videoContainer}>

        <View style={styles.recentViewSection}>
          <Text style={styles.recentText}>Recent streams</Text>
          <TouchableOpacity style={styles.viewAll}>
            <Text style={{color:"#00FFAB"}}>View All</Text>
            <Ionicons name="caret-forward-outline" size={20} color={"#00FFAB"}/>
          </TouchableOpacity>
        </View>
        {/* RECENT VIDEOS DISPLAY */}

        
        <FlatList
        data={oldVideos}
        keyExtractor={(item)=>item._id}
        contentContainerStyle={{gap:8}}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.videoCardVertical}>
            <Image
            style={styles.thumbnailVertical}
            source={{uri:item?.thumbnailUrl}}
            contentFit="cover"
            />
          <Text style={styles.videoTitleVertical} numberOfLines={2} ellipsizeMode="tail">{item?.title}</Text>
          <Text style={styles.Date}>{formatDate(item?.createdAt)}</Text>
          </TouchableOpacity>
        )}
        />
        
      </View>
      </ScrollView>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  linear: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    // Android shadow
    elevation: 8,
  },
  headerContainer: {
    flexDirection: "row",
    overflow: "hidden",
    marginTop: 8,
    alignItems: "center",
    paddingRight: 20,
    paddingVertical: 6,
    borderRadius: 14,
    justifyContent: "space-between",

  },
  logo: {
    width: 100,
    height: 40
  },
  videoContainer:{
    marginTop:10,
    paddingHorizontal:12
  },
  newVideo:{
    fontSize:20,
    fontWeight:'500',
    color:"#00FFAB",
  },
  videoCardHorizontal:{
    width:200,
    borderRadius:10,
    overflow:"hidden",
    backgroundColor: "#1B1212",
  },
  thumbnailHorizontal: {
    width: "100%",
    height: 120,
  },
  videoTitle:{
    fontSize:15,
    fontWeight:"400",
    color:"white",
    marginLeft:5
  },
  Date:{
    fontSize:10,
    fontWeight:"200",
    color:"white",
    marginLeft:5
  },
  viewAll:{
    flexDirection:'row',
    gap:5,
    borderRadius:50,
    padding:4,
    backgroundColor:"#1B1212",
    borderWidth:1,
    borderColor:"#00FFAB",
    alignItems:'center',
    justifyContent:'center'
  },
  recentViewSection:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:10
  },
  recentText:{
    fontSize:20,
    fontWeight:'500',
    color:"#00FFAB",
  },


  videoCardVertical: {
    // Calculate width: (screen width - container padding - gaps) / 3
    width:160,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#1B1212",
    marginBottom: 8,
    marginHorizontal:3,
    paddingBottom:6
  },
  thumbnailVertical: {
    width: "100%",
    height: 100, // Smaller height for grid
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  videoTitleVertical: {
    fontSize: 13,
    fontWeight: "400",
    color: "white",
    marginLeft: 5,
    marginTop: 5,
    marginRight: 5,
  },
})


