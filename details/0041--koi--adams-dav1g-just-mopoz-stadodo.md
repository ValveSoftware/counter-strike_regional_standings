### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [41](../standings_global.md)<br />
Regional Rank: [30]( ../standings_europe.md)<br />
Final Rank Value:  1184.4<br />
<br />
Final Rank Value (1184.4) = Starting Rank Value (1185.0) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.489[<sup>1</sup>](#table2)
- Bounty Collected: 0.462[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.308[<sup>2</sup>](#table1)

The average of these factors is 0.372<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1185.0
- 400 + ( ( 0.372 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1185.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      155 | 2024-06-16 | 9z              | L   | 1.000      | -            | -                | -                | -         |    -3.13 | adamS, dav1g, JUST, mopoz, stadodo |
|           48 |      207 | 2024-06-14 | RED Canids      | W   | 1.000      | 0.548        | 0.115 (0.063)    | 0.698 (0.382)    | 1 (1.000) |    18.59 | adamS, dav1g, JUST, mopoz, stadodo |
|           47 |      210 | 2024-06-14 | Imperial        | W   | 1.000      | 0.548        | 0.390 (0.214)    | 0.646 (0.354)    | 1 (1.000) |    25.93 | adamS, dav1g, JUST, mopoz, stadodo |
|           46 |      367 | 2024-06-09 | Sangal          | L   | 0.987      | -            | -                | -                | -         |   -11.89 | adamS, dav1g, JUST, mopoz, stadodo |
|           45 |      561 | 2024-06-06 | SINNERS         | W   | 0.967      | 0.500        | 0.057 (0.028)    | 0.767 (0.371)    | 0 (0.000) |    10.25 | adamS, dav1g, JUST, mopoz, stadodo |
|           44 |      623 | 2024-06-05 | 3DMAX           | W   | 0.960      | 0.500        | 0.205 (0.098)    | 1.000 (0.480)    | 0 (0.000) |    19.08 | adamS, dav1g, JUST, mopoz, stadodo |
|           43 |      755 | 2024-06-01 | ENCE            | L   | 0.933      | -            | -                | -                | -         |    -5.75 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |      763 | 2024-06-01 | Zero Tenacity   | L   | 0.932      | -            | -                | -                | -         |   -14.66 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |     1430 | 2024-05-09 | B8              | L   | 0.778      | -            | -                | -                | -         |   -13.52 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |     1592 | 2024-05-01 | Zero Tenacity   | L   | 0.725      | -            | -                | -                | -         |   -14.41 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |     1912 | 2024-04-18 | ex-Guild Eagles | L   | 0.640      | -            | -                | -                | -         |   -16.41 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |     1921 | 2024-04-18 | fnatic          | W   | 0.640      | 0.143        | 0.298 (0.027)    | 0.623 (0.057)    | 0 (0.000) |    17.97 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |     1991 | 2024-04-16 | BLEED           | L   | 0.627      | -            | -                | -                | -         |    -4.89 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |     2124 | 2024-04-10 | RUSH B          | W   | 0.587      | 0.500        | -                | 0.320 (0.094)    | 0 (0.000) |     3.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |     2178 | 2024-04-09 | Aurora          | W   | 0.581      | 0.500        | 0.518 (0.150)    | 0.853 (0.247)    | 0 (0.000) |    17.12 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |     2184 | 2024-04-09 | Apeks           | L   | 0.580      | -            | -                | -                | -         |   -11.78 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     2212 | 2024-04-08 | GUN5            | W   | 0.573      | -            | -                | -                | -         |     0.24 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     2217 | 2024-04-08 | fnatic          | L   | 0.572      | -            | -                | -                | -         |    -1.69 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     2318 | 2024-04-04 | NOM             | W   | 0.546      | -            | -                | -                | -         |     0.49 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     2352 | 2024-04-03 | 9INE            | W   | 0.540      | -            | -                | -                | -         |     0.46 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     2389 | 2024-04-02 | TSM             | W   | 0.534      | -            | -                | -                | -         |     1.43 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     2455 | 2024-03-28 | EYEBALLERS      | L   | 0.500      | -            | -                | -                | -         |   -12.55 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     2627 | 2024-03-18 | FURIA           | L   | 0.434      | -            | -                | -                | -         |    -0.97 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     2644 | 2024-03-17 | ENCE            | L   | 0.428      | -            | -                | -                | -         |    -2.07 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     2659 | 2024-03-17 | SAW             | L   | 0.426      | -            | -                | -                | -         |    -4.73 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     2750 | 2024-03-13 | Sangal          | W   | 0.401      | 0.500        | 0.231 (0.046)    | 0.853 (0.171)    | -         |     5.40 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     2805 | 2024-03-11 | B8              | L   | 0.387      | -            | -                | -                | -         |    -6.53 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     2811 | 2024-03-11 | Apeks           | L   | 0.387      | -            | -                | -                | -         |    -8.15 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     2923 | 2024-03-06 | 9 Pandas        | W   | 0.354      | 0.500        | 0.125 (0.022)    | 0.625 (0.111)    | -         |     4.43 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     2960 | 2024-03-05 | FORZE           | W   | 0.348      | -            | -                | -                | -         |     2.97 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2966 | 2024-03-05 | Nemiga          | W   | 0.347      | 0.143        | 0.498 (0.025)    | 0.678 (0.034)    | -         |     7.15 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2975 | 2024-03-05 | ex-Sprout       | W   | 0.347      | -            | -                | -                | -         |     0.33 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3016 | 2024-03-03 | The Chosen Few  | L   | 0.333      | -            | -                | -                | -         |    -9.89 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3068 | 2024-02-29 | Aurora          | L   | 0.314      | -            | -                | -                | -         |    -0.68 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     3074 | 2024-02-29 | HAVU            | W   | 0.313      | -            | -                | -                | -         |     0.79 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     3082 | 2024-02-28 | FORZE           | L   | 0.307      | -            | -                | -                | -         |    -7.43 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3086 | 2024-02-28 | kONO            | W   | 0.306      | -            | -                | -                | -         |     1.28 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3376 | 2024-02-16 | fnatic          | W   | 0.225      | 0.143        | 0.298 (0.010)    | -                | 1 (0.225) |     6.48 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3403 | 2024-02-15 | 9 Pandas        | W   | 0.218      | -            | -                | -                | 1 (0.218) |     2.74 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3429 | 2024-02-14 | 3DMAX           | W   | 0.214      | -            | -                | -                | 1 (0.214) |     3.84 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     3442 | 2024-02-14 | Natus Vincere   | L   | 0.212      | -            | -                | -                | -         |    -0.12 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     3600 | 2024-02-03 | SAW             | L   | 0.140      | -            | -                | -                | -         |    -1.74 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     3630 | 2024-02-02 | Rhyno           | W   | 0.133      | -            | -                | -                | -         |     1.30 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     3636 | 2024-02-02 | ABT             | W   | 0.132      | -            | -                | -                | -         |     0.08 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     3888 | 2024-01-20 | PERA            | W   | 0.047      | -            | -                | -                | -         |     0.38 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     3896 | 2024-01-20 | Enterprise      | L   | 0.047      | -            | -                | -                | -         |    -1.09 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     3954 | 2024-01-19 | HEROIC          | W   | 0.040      | -            | -                | -                | -         |     1.20 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4010 | 2024-01-18 | AMKAL           | L   | 0.033      | -            | -                | -                | -         |    -0.59 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4026 | 2024-01-18 | Spirit          | W   | 0.033      | -            | -                | -                | -         |     1.02 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,316.03)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-06-09 |      0.987 | $12,000.00     | $11,846.59      |
| 2024-03-20 |      0.447 | $10,000.00     | $4,469.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
