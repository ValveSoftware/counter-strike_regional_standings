### Roster Details<br />
Team Name: HEROIC<br />
Roster: degster, kyxsan, NertZ, sjuush, TeSeS<br />
Global Rank: [8](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  1714.4<br />
<br />
Final Rank Value (1714.4) = Starting Rank Value (1789.4) + Head To Head Adjustments (-75.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.944[<sup>1</sup>](#table2)
- Bounty Collected: 0.675[<sup>2</sup>](#table1)
- Opponent Network: 0.244[<sup>2</sup>](#table1)
- LAN Wins: 0.939[<sup>2</sup>](#table1)

The average of these factors is 0.701<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1789.4
- 400 + ( ( 0.701 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1789.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      236 | 2024-12-13 | G2                | L   | 0.992      | -            | -                | -                | -         |    -6.13 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           43 |      304 | 2024-12-08 | Natus Vincere     | W   | 0.958      | 1.000        | 1.000 (0.958)    | 0.480 (0.460)    | 1 (0.958) |    16.39 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           42 |      333 | 2024-12-07 | Spirit            | L   | 0.953      | -            | -                | -                | -         |    -7.39 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           41 |      359 | 2024-12-06 | The MongolZ       | L   | 0.946      | -            | -                | -                | -         |    -9.10 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           40 |      378 | 2024-12-05 | FaZe              | W   | 0.939      | 1.000        | 0.995 (0.935)    | 0.502 (0.471)    | 1 (0.939) |    19.39 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           39 |      394 | 2024-12-04 | BIG               | W   | 0.938      | 1.000        | 0.257 (0.241)    | 0.469 (0.440)    | 1 (0.938) |     4.21 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           38 |      626 | 2024-11-23 | Passion UA        | W   | 0.858      | -            | -                | -                | 1 (0.858) |     1.13 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           37 |      660 | 2024-11-21 | Ninjas in Pyjamas | W   | 0.851      | -            | -                | -                | 1 (0.851) |     0.87 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           36 |      669 | 2024-11-21 | BIG               | L   | 0.847      | -            | -                | -                | -         |   -23.50 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           35 |      684 | 2024-11-20 | PARIVISION        | W   | 0.844      | -            | -                | -                | 1 (0.844) |     0.34 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           34 |     1064 | 2024-11-03 | The MongolZ       | L   | 0.728      | -            | -                | -                | -         |    -8.57 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           33 |     1096 | 2024-11-02 | OG                | W   | 0.721      | 0.898        | 0.171 (0.111)    | 0.292 (0.189)    | 1 (0.721) |     0.34 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           32 |     1242 | 2024-10-26 | fnatic            | W   | 0.673      | 0.477        | 0.188 (0.060)    | -                | -         |     0.84 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           31 |     1287 | 2024-10-23 | Ninjas in Pyjamas | W   | 0.655      | -            | -                | -                | -         |     0.56 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           30 |     1293 | 2024-10-23 | Legacy            | W   | 0.653      | 0.477        | -                | 0.507 (0.158)    | -         |     0.61 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           29 |     1320 | 2024-10-20 | ENCE              | L   | 0.635      | -            | -                | -                | -         |   -19.07 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           28 |     1348 | 2024-10-19 | B8                | W   | 0.628      | 0.589        | 0.166 (0.061)    | 0.520 (0.192)    | 1 (0.628) |     0.79 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           27 |     1409 | 2024-10-17 | ENCE              | W   | 0.614      | 0.589        | 0.338 (0.122)    | 0.325 (0.117)    | 1 (0.614) |     0.73 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           26 |     1420 | 2024-10-17 | Rebels            | W   | 0.612      | -            | -                | -                | 1 (0.612) |     0.14 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           25 |     1499 | 2024-10-12 | Natus Vincere     | L   | 0.581      | -            | -                | -                | -         |    -7.86 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           24 |     1562 | 2024-10-09 | Vitality          | W   | 0.561      | 0.624        | 1.000 (0.350)    | 0.389 (0.136)    | -         |    10.96 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           23 |     1599 | 2024-10-08 | Astralis          | W   | 0.554      | 0.624        | 0.328 (0.114)    | -                | -         |     1.44 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           22 |     1625 | 2024-10-07 | G2                | W   | 0.547      | 0.624        | 1.000 (0.342)    | 0.441 (0.151)    | -         |    13.91 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           21 |     2308 | 2024-09-18 | MIBR              | L   | 0.420      | -            | -                | -                | -         |    -9.61 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           20 |     2342 | 2024-09-17 | Virtus.pro        | W   | 0.413      | 0.889        | -                | 0.333 (0.122)    | -         |     1.18 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           19 |     2585 | 2024-09-08 | Sangal            | W   | 0.354      | -            | -                | -                | -         |     0.66 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           18 |     2614 | 2024-09-07 | Ninjas in Pyjamas | W   | 0.347      | -            | -                | -                | -         |     0.33 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           17 |     2667 | 2024-09-05 | Sangal            | L   | 0.335      | -            | -                | -                | -         |    -9.99 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           16 |     2711 | 2024-09-04 | Lynn Vision       | W   | 0.328      | -            | -                | -                | -         |     0.20 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           15 |     2748 | 2024-09-03 | Ninjas in Pyjamas | L   | 0.321      | -            | -                | -                | -         |    -9.84 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           14 |     2875 | 2024-08-29 | Eternal Fire      | L   | 0.287      | -            | -                | -                | -         |    -8.10 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           13 |     2908 | 2024-08-28 | paiN              | L   | 0.281      | -            | -                | -                | -         |    -7.14 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           12 |     2922 | 2024-08-28 | Falcons           | W   | 0.280      | -            | -                | -                | -         |     0.14 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           11 |     2968 | 2024-08-27 | fnatic            | W   | 0.275      | -            | -                | -                | -         |     0.28 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           10 |     2982 | 2024-08-27 | 3DMAX             | W   | 0.273      | -            | -                | -                | -         |     1.09 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            9 |     3040 | 2024-08-26 | B8                | W   | 0.268      | -            | -                | -                | -         |     0.25 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            8 |     3058 | 2024-08-26 | Cloud9            | L   | 0.267      | -            | -                | -                | -         |    -8.24 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            7 |     3215 | 2024-08-21 | OG                | L   | 0.234      | -            | -                | -                | -         |    -7.31 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            6 |     3601 | 2024-08-09 | FURIA             | L   | 0.154      | -            | -                | -                | -         |    -3.59 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |     3622 | 2024-08-08 | 3DMAX             | W   | 0.147      | -            | -                | -                | -         |     0.58 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |     3674 | 2024-08-07 | MIBR              | L   | 0.140      | -            | -                | -                | -         |    -3.46 | kyxsan, NertZ, sjuush, TeSeS, Woro2k  |
|            3 |     3855 | 2024-08-02 | Complexity        | L   | 0.106      | -            | -                | -                | -         |    -3.07 | kyxsan, NertZ, sAw, sjuush, TeSeS     |
|            2 |     3991 | 2024-07-30 | Spirit            | L   | 0.086      | -            | -                | -                | -         |    -0.64 | kyxsan, NertZ, sAw, sjuush, TeSeS     |
|            1 |     4013 | 2024-07-29 | Complexity        | W   | 0.080      | -            | -                | -                | -         |     0.19 | kyxsan, NertZ, sAw, sjuush, TeSeS     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($206,452.65)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.87) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-11-03 |      0.728 | $150,000.00    | $109,214.10     |
| 2024-10-20 |      0.635 | $40,000.00     | $25,380.85      |
| 2024-10-13 |      0.588 | $20,000.00     | $11,765.74      |
| 2024-09-22 |      0.448 | $23,500.00     | $10,532.66      |
| 2024-09-01 |      0.306 | $5,000.00      | $1,531.74       |
| 2024-08-25 |      0.261 | $5,000.00      | $1,306.98       |
| 2024-08-09 |      0.155 | $4,500.00      | $697.53         |
| 2024-08-04 |      0.120 | $8,500.00      | $1,023.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
