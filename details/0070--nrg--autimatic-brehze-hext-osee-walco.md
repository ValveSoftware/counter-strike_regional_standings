### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, oSee, Walco<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [70](../standings_global.md)<br />
Regional Rank: [17]( ../standings_americas.md)<br />
Final Rank Value:  1000.1<br />
<br />
Final Rank Value (1000.1) = Starting Rank Value (880.2) + Head To Head Adjustments (119.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 880.2
- 400 + ( ( 0.236 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 880.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           77 |      236 | 2024-06-09 | M80              | W   | 1.000      | 0.143        | 0.205 (0.029)    | -                | 0 (0.000) |    26.30 | autimatic, Brehze, HexT, oSee, Walco |
|           76 |      298 | 2024-06-08 | Party Astronauts | W   | 1.000      | -            | -                | -                | 0 (0.000) |    19.19 | autimatic, Brehze, HexT, oSee, Walco |
|           75 |      354 | 2024-06-07 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -12.08 | autimatic, Brehze, HexT, oSee, Walco |
|           74 |      397 | 2024-06-06 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -13.92 | autimatic, Brehze, HexT, oSee, Walco |
|           73 |      409 | 2024-06-06 | Wildcard         | W   | 1.000      | 0.143        | 0.068 (0.010)    | -                | 0 (0.000) |    18.26 | autimatic, Brehze, HexT, oSee, Walco |
|           72 |      411 | 2024-06-06 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.70 | autimatic, Brehze, HexT, oSee, Walco |
|           71 |      432 | 2024-06-06 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -12.38 | autimatic, Brehze, HexT, oSee, Walco |
|           70 |      465 | 2024-06-05 | LAG              | W   | 1.000      | 0.477        | 0.021 (0.010)    | 0.421 (0.201)    | 0 (0.000) |    12.09 | autimatic, Brehze, HexT, oSee, Walco |
|           69 |      477 | 2024-06-05 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.28 | autimatic, Brehze, HexT, oSee, Walco |
|           68 |      515 | 2024-06-04 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -11.33 | autimatic, Brehze, HexT, oSee, Walco |
|           67 |      812 | 2024-05-23 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -12.18 | autimatic, Brehze, HexT, oSee, Walco |
|           66 |      829 | 2024-05-22 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -14.96 | autimatic, Brehze, HexT, oSee, Walco |
|           65 |      834 | 2024-05-22 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -16.35 | autimatic, Brehze, HexT, oSee, Walco |
|           64 |      857 | 2024-05-22 | Legacy           | W   | 1.000      | 0.384        | 0.146 (0.056)    | 0.452 (0.174)    | 0 (0.000) |    20.20 | autimatic, Brehze, HexT, oSee, Walco |
|           63 |      880 | 2024-05-21 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -23.72 | autimatic, Brehze, HexT, oSee, Walco |
|           62 |      882 | 2024-05-21 | Take Flyte       | W   | 1.000      | 0.477        | -                | 0.306 (0.146)    | 0 (0.000) |     7.27 | autimatic, Brehze, HexT, oSee, Walco |
|           61 |      913 | 2024-05-20 | M80              | L   | 1.000      | -            | -                | -                | -         |    -5.94 | autimatic, Brehze, HexT, oSee, Walco |
|           60 |      918 | 2024-05-20 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.28 | autimatic, Brehze, HexT, oSee, Walco |
|           59 |      976 | 2024-05-18 | Nouns            | L   | 0.998      | -            | -                | -                | -         |   -16.59 | autimatic, Brehze, HexT, oSee, Walco |
|           58 |      981 | 2024-05-18 | Party Astronauts | W   | 0.997      | 0.303        | 0.055 (0.017)    | 0.600 (0.181)    | 0 (0.000) |    14.33 | autimatic, Brehze, HexT, oSee, Walco |
|           57 |     1015 | 2024-05-17 | BOSS             | W   | 0.991      | -            | -                | -                | 0 (0.000) |     8.42 | autimatic, Brehze, HexT, oSee, Walco |
|           56 |     1083 | 2024-05-15 | LAG              | W   | 0.978      | 0.477        | 0.021 (0.010)    | 0.421 (0.196)    | -         |     9.47 | autimatic, Brehze, HexT, oSee, Walco |
|           55 |     1091 | 2024-05-15 | LAG              | W   | 0.978      | 0.477        | 0.021 (0.010)    | 0.421 (0.196)    | -         |    10.21 | autimatic, Brehze, HexT, oSee, Walco |
|           54 |     1136 | 2024-05-14 | One More         | W   | 0.971      | -            | -                | -                | -         |     5.84 | autimatic, Brehze, HexT, oSee, Walco |
|           53 |     1142 | 2024-05-14 | One More         | W   | 0.971      | -            | -                | -                | -         |     6.16 | autimatic, Brehze, HexT, oSee, Walco |
|           52 |     1206 | 2024-05-12 | Take Flyte       | W   | 0.958      | -            | -                | -                | -         |     8.89 | autimatic, Brehze, HexT, oSee, Walco |
|           51 |     1208 | 2024-05-12 | Elevate          | W   | 0.957      | -            | -                | -                | -         |    15.08 | autimatic, Brehze, HexT, oSee, Walco |
|           50 |     1238 | 2024-05-11 | Take Flyte       | W   | 0.950      | -            | -                | -                | -         |     8.75 | autimatic, Brehze, HexT, oSee, Walco |
|           49 |     1240 | 2024-05-11 | BOSS             | W   | 0.950      | -            | -                | -                | -         |    11.37 | autimatic, Brehze, HexT, oSee, Walco |
|           48 |     1342 | 2024-05-06 | Party Astronauts | W   | 0.918      | 0.477        | 0.055 (0.024)    | 0.600 (0.263)    | -         |    17.80 | autimatic, Brehze, HexT, oSee, Walco |
|           47 |     1343 | 2024-05-06 | Party Astronauts | L   | 0.918      | -            | -                | -                | -         |   -10.95 | autimatic, Brehze, HexT, oSee, Walco |
|           46 |     1578 | 2024-04-25 | Wildcard         | L   | 0.845      | -            | -                | -                | -         |   -11.76 | autimatic, Brehze, HexT, oSee, Walco |
|           45 |     1580 | 2024-04-25 | Wildcard         | W   | 0.844      | 0.477        | 0.068 (0.028)    | 0.572 (0.230)    | -         |    15.12 | autimatic, Brehze, HexT, oSee, Walco |
|           44 |     1816 | 2024-04-17 | OMiT             | L   | 0.790      | -            | -                | -                | -         |   -16.51 | autimatic, Brehze, HexT, oSee, Walco |
|           43 |     1875 | 2024-04-15 | Mythic           | W   | 0.778      | 0.477        | -                | 0.377 (0.140)    | -         |     8.83 | autimatic, Brehze, HexT, oSee, Walco |
|           42 |     1876 | 2024-04-15 | Mythic           | W   | 0.777      | -            | -                | -                | -         |     9.41 | autimatic, Brehze, HexT, oSee, Walco |
|           41 |     1962 | 2024-04-10 | BOSS             | W   | 0.745      | -            | -                | -                | -         |    10.49 | autimatic, Brehze, HexT, oSee, Walco |
|           40 |     1967 | 2024-04-10 | BOSS             | L   | 0.744      | -            | -                | -                | -         |   -13.25 | autimatic, Brehze, HexT, oSee, Walco |
|           39 |     2021 | 2024-04-09 | Carpe Diem       | W   | 0.738      | -            | -                | -                | -         |     6.44 | autimatic, Brehze, HexT, oSee, Walco |
|           38 |     2024 | 2024-04-09 | Carpe Diem       | W   | 0.738      | -            | -                | -                | -         |     6.79 | autimatic, Brehze, HexT, oSee, Walco |
|           37 |     2325 | 2024-03-27 | Nouns            | W   | 0.652      | 0.477        | 0.081 (0.025)    | 0.504 (0.157)    | -         |    13.59 | autimatic, Brehze, HexT, oSee, Walco |
|           36 |     2330 | 2024-03-27 | Nouns            | L   | 0.651      | -            | -                | -                | -         |    -6.96 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     2377 | 2024-03-26 | MIGHT            | W   | 0.645      | -            | -                | -                | -         |     3.29 | autimatic, Brehze, HexT, oSee, Walco |
|           34 |     2382 | 2024-03-26 | MIGHT            | W   | 0.645      | -            | -                | -                | -         |     3.40 | autimatic, Brehze, HexT, oSee, Walco |
|           33 |     2548 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.572      | -            | -                | -                | -         |     7.99 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     2550 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.571      | -            | -                | -                | -         |   -10.27 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     2568 | 2024-03-14 | Limitless        | W   | 0.565      | -            | -                | -                | -         |     4.03 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     2573 | 2024-03-14 | Limitless        | W   | 0.565      | -            | -                | -                | -         |     4.17 | autimatic, Brehze, HexT, oSee, Walco |
|           29 |     2646 | 2024-03-12 | Carpe Diem       | L   | 0.551      | -            | -                | -                | -         |   -11.09 | autimatic, Brehze, HexT, oSee, Walco |
|           28 |     2901 | 2024-03-02 | MIBR             | L   | 0.483      | -            | -                | -                | -         |    -0.30 | Brehze, daps, FaNg, HexT, oSee       |
|           27 |     2920 | 2024-03-01 | Imperial         | L   | 0.477      | -            | -                | -                | -         |    -0.43 | Brehze, daps, FaNg, HexT, oSee       |
|           26 |     3026 | 2024-02-24 | Wildcard         | L   | 0.438      | -            | -                | -                | -         |    -5.32 | Brehze, daps, FaNg, HexT, oSee       |
|           25 |     3029 | 2024-02-24 | Limitless        | W   | 0.438      | -            | -                | -                | -         |     3.27 | Brehze, daps, FaNg, HexT, oSee       |
|           24 |     3035 | 2024-02-24 | Mythic           | W   | 0.437      | -            | -                | -                | -         |     6.43 | Brehze, daps, FaNg, HexT, oSee       |
|           23 |     3071 | 2024-02-22 | Party Astronauts | L   | 0.424      | -            | -                | -                | -         |    -5.27 | Brehze, daps, FaNg, HexT, oSee       |
|           22 |     3075 | 2024-02-22 | Wildcard         | W   | 0.424      | -            | -                | -                | -         |     8.29 | Brehze, daps, FaNg, HexT, oSee       |
|           21 |     3123 | 2024-02-20 | Party Astronauts | L   | 0.412      | -            | -                | -                | -         |    -5.20 | Brehze, daps, FaNg, HexT, oSee       |
|           20 |     3148 | 2024-02-19 | Party Astronauts | W   | 0.406      | -            | -                | -                | -         |     7.75 | Brehze, daps, FaNg, HexT, oSee       |
|           19 |     3150 | 2024-02-19 | Mythic           | W   | 0.404      | -            | -                | -                | -         |     6.26 | Brehze, daps, FaNg, HexT, oSee       |
|           18 |     3451 | 2024-02-03 | Elevate          | L   | 0.297      | -            | -                | -                | -         |    -4.53 | Brehze, daps, FaNg, HexT, oSee       |
|           17 |     3477 | 2024-02-02 | Party Astronauts | W   | 0.291      | -            | -                | -                | -         |     5.69 | Brehze, daps, FaNg, HexT, oSee       |
|           16 |     3481 | 2024-02-02 | Wildcard         | L   | 0.291      | -            | -                | -                | -         |    -3.36 | Brehze, daps, FaNg, HexT, oSee       |
|           15 |     3483 | 2024-02-02 | Party Astronauts | W   | 0.290      | -            | -                | -                | -         |     5.75 | Brehze, daps, FaNg, HexT, oSee       |
|           14 |     3859 | 2024-01-18 | Wildcard         | L   | 0.191      | -            | -                | -                | -         |    -2.27 | Brehze, daps, FaNg, HexT, oSee       |
|           13 |     3863 | 2024-01-18 | Elevate          | W   | 0.191      | -            | -                | -                | -         |     3.11 | Brehze, daps, FaNg, HexT, oSee       |
|           12 |     3909 | 2024-01-17 | squids           | W   | 0.184      | -            | -                | -                | -         |     0.38 | Brehze, daps, FaNg, HexT, oSee       |
|           11 |     3960 | 2024-01-16 | Elevate          | L   | 0.178      | -            | -                | -                | -         |    -2.73 | Brehze, daps, FaNg, HexT, oSee       |
|           10 |     3966 | 2024-01-16 | regain           | W   | 0.177      | -            | -                | -                | -         |     0.57 | Brehze, daps, FaNg, HexT, oSee       |
|            9 |     4006 | 2024-01-15 | TSM Shimmer      | W   | 0.171      | -            | -                | -                | -         |     1.63 | Brehze, daps, FaNg, HexT, oSee       |
|            8 |     4035 | 2024-01-14 | Rocket           | L   | 0.166      | -            | -                | -                | -         |    -4.57 | Brehze, daps, FaNg, HexT, oSee       |
|            7 |     4045 | 2024-01-14 | LOS              | W   | 0.164      | -            | -                | -                | -         |     0.33 | Brehze, daps, FaNg, HexT, oSee       |
|            6 |     4061 | 2024-01-13 | Nouns            | L   | 0.158      | -            | -                | -                | -         |    -1.94 | Brehze, daps, FaNg, HexT, oSee       |
|            5 |     4100 | 2024-01-12 | Complexity       | L   | 0.152      | -            | -                | -                | -         |    -0.03 | Brehze, daps, FaNg, HexT, oSee       |
|            4 |     4109 | 2024-01-12 | Elevate          | W   | 0.152      | -            | -                | -                | -         |     2.37 | Brehze, daps, FaNg, HexT, oSee       |
|            3 |     4191 | 2024-01-09 | Liquid           | L   | 0.133      | -            | -                | -                | -         |    -0.05 | Brehze, daps, FaNg, HexT, oSee       |
|            2 |     4192 | 2024-01-09 | Akimbo           | W   | 0.132      | -            | -                | -                | -         |     1.14 | Brehze, daps, FaNg, HexT, oSee       |
|            1 |     4195 | 2024-01-09 | MagicLight       | W   | 0.132      | -            | -                | -                | -         |     0.26 | Brehze, daps, FaNg, HexT, oSee       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,163.39)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $4,250.00      | $4,250.00       |
| 2024-05-18 |      0.998 | $1,000.00      | $998.18         |
| 2024-05-12 |      0.958 | $2,000.00      | $1,915.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
