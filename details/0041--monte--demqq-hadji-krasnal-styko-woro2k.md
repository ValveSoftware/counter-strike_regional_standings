### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, hAdji, kRaSnaL, STYKO, Woro2k<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [41](../standings_global.md)<br />
Regional Rank: [30]( ../standings_europe.md)<br />
Final Rank Value:  1196.1<br />
<br />
Final Rank Value (1196.1) = Starting Rank Value (1314.4) + Head To Head Adjustments (-118.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.580[<sup>1</sup>](#table2)
- Bounty Collected: 0.511[<sup>2</sup>](#table1)
- Opponent Network: 0.354[<sup>2</sup>](#table1)
- LAN Wins: 0.354[<sup>2</sup>](#table1)

The average of these factors is 0.450<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1314.4
- 400 + ( ( 0.450 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1314.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |       28 | 2024-06-16 | B8                | L   | 1.000      | -            | -                | -                | -         |   -15.41 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           60 |       53 | 2024-06-15 | BLEED             | W   | 1.000      | 0.435        | 0.347 (0.151)    | 0.946 (0.411)    | 0 (0.000) |    18.64 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           59 |      105 | 2024-06-14 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -11.86 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           58 |      129 | 2024-06-13 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.153 (0.067)    | 1.000 (0.435)    | 0 (0.000) |    12.22 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           57 |      165 | 2024-06-12 | FORZE Reload      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.37 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           56 |      207 | 2024-06-10 | SINNERS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.73 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           55 |      212 | 2024-06-10 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -9.84 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           54 |      218 | 2024-06-10 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -25.01 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           53 |      232 | 2024-06-09 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -11.54 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           52 |      244 | 2024-06-09 | Aurora            | W   | 1.000      | 0.143        | 0.526 (0.075)    | -                | 0 (0.000) |    21.44 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           51 |      253 | 2024-06-09 | 3DMAX             | W   | 1.000      | -            | -                | -                | -         |    15.07 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           50 |      259 | 2024-06-09 | SAW               | L   | 1.000      | -            | -                | -                | -         |   -12.50 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           49 |      267 | 2024-06-09 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -22.36 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           48 |      274 | 2024-06-09 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -18.36 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           47 |      313 | 2024-06-08 | 1WIN              | W   | 1.000      | -            | -                | -                | -         |     8.31 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           46 |      325 | 2024-06-08 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -13.42 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           45 |      331 | 2024-06-08 | Quixal            | W   | 1.000      | -            | -                | -                | -         |     0.27 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           44 |      532 | 2024-06-04 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -24.39 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           43 |      738 | 2024-05-27 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -4.66 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           42 |      749 | 2024-05-27 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -0.62 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           41 |      906 | 2024-05-21 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -22.06 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           40 |      945 | 2024-05-20 | Sashi             | W   | 1.000      | 0.500        | 0.200 (0.100)    | 1.000 (0.500)    | -         |    14.89 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           39 |      998 | 2024-05-18 | Sashi             | L   | 0.995      | -            | -                | -                | -         |   -16.02 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           38 |     1027 | 2024-05-17 | BLEED             | W   | 0.989      | 0.500        | 0.347 (0.172)    | 0.946 (0.467)    | -         |    14.81 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           37 |     1066 | 2024-05-16 | kONO              | W   | 0.982      | -            | -                | -                | -         |     3.61 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           36 |     1112 | 2024-05-15 | DMS               | W   | 0.975      | 0.500        | -                | 0.473 (0.230)    | -         |     3.63 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           35 |     1327 | 2024-05-07 | FaZe              | L   | 0.923      | -            | -                | -                | -         |    -0.59 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           34 |     1367 | 2024-05-05 | FURIA             | W   | 0.909      | 0.889        | 0.245 (0.198)    | 0.521 (0.421)    | 1 (0.909) |    23.47 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           33 |     1388 | 2024-05-04 | FORZE             | W   | 0.901      | 0.889        | 0.096 (0.077)    | 0.350 (0.280)    | 1 (0.901) |     8.01 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           32 |     1421 | 2024-05-02 | ENCE              | L   | 0.889      | -            | -                | -                | -         |    -7.23 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           31 |     1442 | 2024-05-01 | Liquid            | L   | 0.883      | -            | -                | -                | -         |    -2.96 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           30 |     1468 | 2024-04-30 | FORZE             | W   | 0.876      | 0.889        | 0.096 (0.075)    | 0.350 (0.273)    | 1 (0.876) |     7.39 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           29 |     1721 | 2024-04-19 | OG                | L   | 0.803      | -            | -                | -                | -         |   -12.17 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           28 |     1789 | 2024-04-18 | paiN              | L   | 0.795      | -            | -                | -                | -         |    -3.74 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           27 |     1908 | 2024-04-13 | Rebels            | W   | 0.762      | -            | -                | -                | -         |     6.88 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           26 |     1923 | 2024-04-12 | Sangal            | W   | 0.755      | 0.500        | 0.216 (0.082)    | 0.884 (0.334)    | -         |     6.78 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           25 |     2212 | 2024-04-03 | Metizport         | L   | 0.696      | -            | -                | -                | -         |   -17.07 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           24 |     2228 | 2024-04-03 | Apeks             | W   | 0.695      | -            | -                | -                | -         |     6.38 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           23 |     2253 | 2024-04-02 | GamerLegion       | W   | 0.690      | -            | -                | -                | -         |    11.15 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           22 |     2263 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.689      | -            | -                | -                | -         |    -1.12 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           21 |     2288 | 2024-03-31 | RUSH B            | L   | 0.675      | -            | -                | -                | -         |   -19.39 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           20 |     2319 | 2024-03-28 | Betera            | L   | 0.656      | -            | -                | -                | -         |   -19.79 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           19 |     2387 | 2024-03-26 | System5           | W   | 0.643      | -            | -                | -                | -         |     0.34 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           18 |     2615 | 2024-03-13 | PERA              | W   | 0.557      | -            | -                | -                | -         |     2.35 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           17 |     2719 | 2024-03-09 | Metizport         | L   | 0.529      | -            | -                | -                | -         |   -13.95 | DemQQ, kRaSnaL, leen, sdy, Woro2k    |
|           16 |     2758 | 2024-03-07 | Imperial          | W   | 0.517      | 0.535        | 0.406 (0.112)    | 0.694 (0.192)    | -         |    12.90 | DemQQ, kRaSnaL, leen, sdy, Woro2k    |
|           15 |     2829 | 2024-03-05 | SAW               | L   | 0.503      | -            | -                | -                | -         |    -7.32 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           14 |     2895 | 2024-03-03 | Gaimin Gladiators | L   | 0.487      | -            | -                | -                | -         |    -9.96 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           13 |     2900 | 2024-03-02 | 3DMAX             | L   | 0.483      | -            | -                | -                | -         |    -9.63 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           12 |     2943 | 2024-02-29 | PARIVISION        | W   | 0.468      | -            | -                | -                | -         |     1.95 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           11 |     3111 | 2024-02-21 | Astralis          | L   | 0.414      | -            | -                | -                | -         |    -0.49 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|           10 |     3141 | 2024-02-20 | Apeks             | L   | 0.407      | -            | -                | -                | -         |    -9.67 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            9 |     3157 | 2024-02-19 | Nexus             | W   | 0.402      | -            | -                | -                | 1 (0.402) |     0.94 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k   |
|            8 |     3166 | 2024-02-19 | Gaimin Gladiators | L   | 0.401      | -            | -                | -                | -         |    -8.71 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k   |
|            7 |     3175 | 2024-02-18 | Aurora            | W   | 0.397      | -            | -                | -                | -         |    10.72 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            6 |     3178 | 2024-02-18 | SINNERS           | W   | 0.396      | -            | -                | -                | -         |     2.75 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            5 |     3206 | 2024-02-17 | Aurora            | W   | 0.388      | -            | -                | -                | -         |    10.68 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            4 |     3211 | 2024-02-17 | The Chosen Few    | W   | 0.388      | -            | -                | -                | -         |     0.40 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            3 |     3410 | 2024-02-06 | G2                | L   | 0.315      | -            | -                | -                | -         |    -0.31 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            2 |     3420 | 2024-02-05 | Cloud9            | W   | 0.308      | -            | -                | -                | 1 (0.308) |     5.28 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            1 |     3443 | 2024-02-04 | GamerLegion       | L   | 0.301      | -            | -                | -                | -         |    -7.46 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56,878.56)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-18 |      0.996 | $2,000.00      | $1,991.96       |
| 2024-05-12 |      0.956 | $17,500.00     | $16,721.75      |
| 2024-04-20 |      0.810 | $5,000.00      | $4,052.37       |
| 2024-03-10 |      0.537 | $7,500.00      | $4,024.99       |
| 2024-02-11 |      0.349 | $16,000.00     | $5,587.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
