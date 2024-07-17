### Roster Details<br />
Team Name: Liquid<br />
Roster: cadiaN, NAF, skullz, Twistzz, YEKINDAR<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [14](../standings_global.md)<br />
Regional Rank: [2]( ../standings_americas.md)<br />
Final Rank Value:  1618.4<br />
<br />
Final Rank Value (1618.4) = Starting Rank Value (1576.6) + Head To Head Adjustments (41.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.765[<sup>1</sup>](#table2)
- Bounty Collected: 0.566[<sup>2</sup>](#table1)
- Opponent Network: 0.221[<sup>2</sup>](#table1)
- LAN Wins: 0.639[<sup>2</sup>](#table1)

The average of these factors is 0.548<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1576.6
- 400 + ( ( 0.548 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1576.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      989 | 2024-05-29 | G2               | L   | 0.876      | -            | -                | -                | -         |    -4.22 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           41 |     1015 | 2024-05-28 | Falcons          | W   | 0.869      | 0.624        | 0.344 (0.187)    | 0.271 (0.147)    | 1 (0.869) |    11.23 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           40 |     1033 | 2024-05-27 | 9z               | L   | 0.863      | -            | -                | -                | -         |   -14.56 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           39 |     1046 | 2024-05-27 | Complexity       | W   | 0.861      | 0.624        | 0.445 (0.239)    | 0.412 (0.221)    | 1 (0.861) |    20.53 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           38 |     1115 | 2024-05-23 | Eternal Fire     | L   | 0.834      | -            | -                | -                | -         |    -9.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           37 |     1161 | 2024-05-22 | Astralis         | W   | 0.826      | 0.769        | 0.549 (0.348)    | 0.434 (0.275)    | -         |    21.80 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           36 |     1208 | 2024-05-21 | ENCE             | W   | 0.819      | 0.769        | 0.212 (0.134)    | 0.377 (0.237)    | -         |     6.13 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           35 |     1264 | 2024-05-19 | AMKAL            | W   | 0.806      | 0.769        | 0.134 (0.083)    | 0.523 (0.324)    | -         |     2.89 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           34 |     1278 | 2024-05-18 | OG               | W   | 0.802      | 0.769        | 0.210 (0.129)    | -                | -         |     2.56 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           33 |     1569 | 2024-05-10 | Astralis         | L   | 0.746      | -            | -                | -                | -         |    -3.36 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           32 |     1612 | 2024-05-08 | FlyQuest         | W   | 0.734      | 0.889        | 0.116 (0.076)    | 0.388 (0.253)    | 1 (0.734) |     5.53 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           31 |     1680 | 2024-05-04 | MOUZ             | L   | 0.707      | -            | -                | -                | -         |    -1.95 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           30 |     1740 | 2024-05-01 | Monte            | W   | 0.688      | 0.889        | -                | 0.241 (0.147)    | 1 (0.688) |     1.59 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           29 |     1765 | 2024-04-30 | FURIA            | W   | 0.681      | 0.889        | 0.253 (0.153)    | 0.483 (0.292)    | 1 (0.681) |    11.39 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           28 |     2008 | 2024-04-19 | M80              | L   | 0.610      | -            | -                | -                | -         |   -16.49 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           27 |     2058 | 2024-04-18 | M80              | W   | 0.603      | -            | -                | -                | -         |     2.52 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           26 |     2062 | 2024-04-18 | Legacy           | W   | 0.602      | -            | -                | -                | -         |     1.38 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           25 |     2110 | 2024-04-17 | OMiT             | W   | 0.595      | -            | -                | -                | -         |     0.26 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           24 |     2113 | 2024-04-17 | straykids        | W   | 0.595      | -            | -                | -                | -         |     0.12 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           23 |     2225 | 2024-04-12 | FaZe             | L   | 0.559      | -            | -                | -                | -         |    -2.50 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     2308 | 2024-04-10 | MOUZ             | L   | 0.545      | -            | -                | -                | -         |    -1.52 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     2388 | 2024-04-08 | G2               | W   | 0.532      | 0.624        | 0.738 (0.245)    | 0.496 (0.165)    | 1 (0.532) |    15.04 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     2399 | 2024-04-07 | HEROIC           | W   | 0.530      | 0.624        | 0.333 (0.110)    | 0.448 (0.148)    | 1 (0.530) |    12.16 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     3070 | 2024-03-07 | SAW              | L   | 0.320      | -            | -                | -                | -         |    -8.47 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     3152 | 2024-03-04 | Complexity       | L   | 0.302      | -            | -                | -                | -         |    -1.93 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     3189 | 2024-03-03 | BOSS             | W   | 0.294      | -            | -                | -                | 1 (0.294) |     0.17 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     3202 | 2024-03-02 | FURIA            | L   | 0.287      | -            | -                | -                | -         |    -3.59 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     3216 | 2024-03-01 | BESTIA           | W   | 0.282      | -            | -                | -                | 1 (0.282) |     0.43 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     3287 | 2024-02-26 | Nouns            | W   | 0.256      | -            | -                | -                | -         |     0.29 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     3289 | 2024-02-26 | BOSS             | W   | 0.255      | -            | -                | -                | -         |     0.14 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     3300 | 2024-02-25 | Wildcard         | W   | 0.250      | -            | -                | -                | -         |     0.26 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     3306 | 2024-02-25 | Nouns            | L   | 0.249      | -            | -                | -                | -         |    -7.58 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     3366 | 2024-02-22 | Party Astronauts | W   | 0.230      | -            | -                | -                | -         |     0.28 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     3370 | 2024-02-22 | MIGHT            | W   | 0.229      | -            | -                | -                | -         |     0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     3374 | 2024-02-22 | ex-CatEvil       | W   | 0.229      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     3880 | 2024-01-28 | G2               | L   | 0.061      | -            | -                | -                | -         |    -0.18 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     3894 | 2024-01-27 | FaZe             | L   | 0.054      | -            | -                | -                | -         |    -0.23 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     3936 | 2024-01-25 | GamerLegion      | W   | 0.039      | -            | -                | -                | 1 (0.039) |     0.03 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     3948 | 2024-01-24 | Spirit           | W   | 0.033      | -            | -                | -                | -         |     0.95 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     4042 | 2024-01-20 | M80              | L   | 0.010      | -            | -                | -                | -         |    -0.28 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     4091 | 2024-01-19 | Wildcard         | W   | 0.003      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     4101 | 2024-01-19 | BOSS             | W   | 0.002      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($121,177.47)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.49) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.901 | $6,000.00      | $5,408.36       |
| 2024-05-23 |      0.834 | $100,000.00    | $83,375.72      |
| 2024-05-12 |      0.760 | $32,000.00     | $24,327.85      |
| 2024-04-14 |      0.572 | $10,000.00     | $5,721.22       |
| 2024-03-10 |      0.341 | $5,000.00      | $1,706.91       |
| 2024-01-28 |      0.061 | $10,500.00     | $637.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
