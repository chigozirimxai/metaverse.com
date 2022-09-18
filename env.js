function(e){function t(i){if(r[i])return r[i].exports;var o=r[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t){if("undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");AFRAME.registerComponent("environment",{schema:{active:{default:!1},preset:{default:"default",oneOf:["none","default","contact","egypt","checkerboard","forest","goaland","yavapai","goldmine","arches","threetowers","poison","tron","japan","dream","volcano","starry","osiris"]},seed:{type:"int",default:1,min:0,max:1e3},skyType:{default:"color",oneOf:["none","color","gradient","atmosphere"]},skyColor:{type:"color"},horizonColor:{type:"color"},lighting:{default:"distant",oneOf:["none","distant","point"]},shadow:{default:!1},shadowSize:{default:10},lightPosition:{type:"vec3",default:{x:0,y:1,z:-.2}},fog:{type:"float",default:0,min:0,max:1},flatShading:{default:!1},playArea:{type:"float",default:1,min:.5,max:10},ground:{default:"hills",oneOf:["none","flat","hills","canyon","spikes","noise"]},groundYScale:{type:"float",default:3,min:0,max:50},groundTexture:{default:"none",oneOf:["none","checkerboard","squares","walkernoise"]},groundColor:{type:"color",default:"#553e35"},groundColor2:{type:"color",default:"#694439"},dressing:{default:"none",oneOf:["none","cubes","pyramids","cylinders","hexagons","stones","trees","mushrooms","towers","apparatus","arches","torii"]},dressingAmount:{type:"int",default:10,min:0,max:1e3},dressingColor:{type:"color",default:"#795449"},dressingScale:{type:"float",default:5,min:0,max:100},dressingVariance:{type:"vec3",default:{x:1,y:1,z:1}},dressingUniformScale:{default:!0},dressingOnPlayArea:{type:"float",default:0,min:0,max:1},grid:{default:"none",oneOf:["none","1x1","2x2","crosses","dots","xlines","ylines"]},gridColor:{type:"color",default:"#ccc"}},multiple:!1,presets:{none:{},default:{active:!0,seed:1,skyType:"atmosphere",skyColor:"#88c",horizonColor:"#ddd",lighting:"distant",lightPosition:{x:-.11,y:1,z:.33},fog:.78,flatShading:!1,playArea:1,ground:"hills",groundYScale:3,groundTexture:"checkerboard",groundColor:"#454545",groundColor2:"#5d5d5d",dressing:"none",dressingAmount:10,dressingColor:"#795449",dressingScale:1,dressingVariance:{x:0,y:0,z:0},dressingUniformScale:!0,dressingOnPlayArea:0,grid:"none",gridColor:"#ccc",shadow:!1},contact:{active:!0,seed:14,skyType:"gradient",skyColor:"#478d54",horizonColor:"#b696cb",lighting:"distant",lightPosition:{x:0,y:2.01,z:-1},fog:.8,flatShading:!1,playArea:1,ground:"spikes",groundYScale:4.91,groundTexture:"none",groundColor:"#2e455f",groundColor2:"#694439",dressing:"apparatus",dressingAmount:7,dressingColor:"#657067",dressingScale:20,dressingVariance:{x:20,y:20,z:20},dressingUniformScale:!0,dressingOnPlayArea:0,grid:"1x1",gridColor:"#478d54",shadow:!1},egypt:{active:!0,seed:26,skyType:"gradient",skyColor:"#1b7660",horizonColor:"#e4b676",lighting:"distant",lightPosition:{x:0,y:1.65,z:-1},fog:.75,flatShading:!1,playArea:1,ground:"hills",groundYScale:5,groundTexture:"walkernoise",groundColor:"#664735",groundColor2:"#6c4b39",dressing:"pyramids",dressingAmount:10,dressingColor:"#7c5c45",dressingScale:5,dressingVariance:{x:20,y:20,z:20},dressingUniformScale:!0,dressingOnPlayArea:0,grid:"spots",gridColor:"#e4b676",shadow:!1},checkerboard:{active:!0,seed:1,skyType:"gradient",skyColor:"#0d0d0d",horizonColor:"#404040",lighting:"distant",lightPosition:{x:0,y:1,z:-.2},fog:.81,flatShading:!0,playArea:1,ground:"hills",groundYScale:4.81,groundTexture:"checkerboard",groundColor:"#252525",groundColor2:"#111111",dressing:"cubes",dressingAmount:10,dressingColor:"#9f9f9f",dressingScale:1.51,dressingVariance:{x:5,y:20,z:5},dressingUniformScale:!0,dressingOnPlayArea:0,grid:"dots",gridColor:"#ccc",shadow:!1},forest:{active:!0,seed:8,skyType:"gradient",skyColor:"#24b59f",horizonColor:"#eff9b7",lighting:"distant",lightPosition:{x:-1.2,y:.88,z:-.55},fog:.8,flatShading:!1,playArea:1,ground:"noise",groundYScale:4.18,groundTexture:"squares",groundColor:"#937a24",groundColor2:"#987d2e",dressing:"trees",dressingAmount:500,dressingColor:"#888b1d",dressingScale:1,dressingVariance:{x:10,y:10,z:10},dressingUniformScale:!0,dressingOnPlayArea:0,grid:"none",gridColor:"#c5a543",shadow:!1},goaland:{active:!0,seed:17,skyType:"gradient",skyColor:"#14645f",horizonColor:"#a3dab8",lighting:"point",lightPosition:{x:.1,y:4,z:.56},fog:.73,flatShading:!1,playArea:1,ground:"noise",groundYScale:.81,groundTexture:"none",groundColor:"#ae3241",groundColor2:"#db4453",dressing:"mushrooms",dressingAmount:150,dressingColor:"#a9313d",dressingScale:5,dressingVariance:{x:5,y:10,z:5},dressingUniformScale:!0,dressingOnPlayArea:0,grid:"dots",gridColor:"#239893",shadow:!1},yavapai:{active:!0,seed:11,skyType:"gradient",skyColor:"#239849",horizonColor:"#cfe0af",lighting:"distant",lightPosition:{x:.5,y:1,z:0},fog:.8,flatShading:!0,playArea:1,ground:"canyon",groundYScale:9.76,groundTexture:"walker
Write to Ofonmac Macaulay