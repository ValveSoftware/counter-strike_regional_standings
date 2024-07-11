### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, chayJESUS, Lucaozy, nicks, zevy<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [42](../standings_global.md)<br />
Regional Rank: [10]( ../standings_americas.md)<br />
Final Rank Value:  1180.5<br />
<br />
Final Rank Value (1180.5) = Starting Rank Value (1065.0) + Head To Head Adjustments (115.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.562[<sup>1</sup>](#table2)
- Bounty Collected: 0.477[<sup>2</sup>](#table1)
- Opponent Network: 0.222[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.315<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1065.0
- 400 + ( ( 0.315 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1065.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           77 |      148 | 2024-06-16 | paiN           | W   | 1.000      | 0.450        | 0.478 (0.215)    | 0.768 (0.346)    | 0 (0.000) |    26.33 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           76 |      177 | 2024-06-15 | inSanitY       | W   | 1.000      | 0.450        | 0.066 (0.030)    | 0.433 (0.195)    | 0 (0.000) |     9.44 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           75 |      211 | 2024-06-14 | Sharks         | W   | 1.000      | 0.450        | 0.046 (0.021)    | 0.520 (0.234)    | 0 (0.000) |    13.18 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           74 |      423 | 2024-06-08 | KRÜ            | W   | 0.982      | -            | -                | -                | 0 (0.000) |     5.58 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           73 |      501 | 2024-06-07 | Bounty Hunters | W   | 0.973      | 0.450        | -                | 0.440 (0.193)    | 0 (0.000) |     6.70 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           72 |      564 | 2024-06-06 | W7M            | W   | 0.967      | 0.450        | -                | 0.404 (0.176)    | 0 (0.000) |     3.72 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           71 |      608 | 2024-06-05 | paiN           | L   | 0.962      | -            | -                | -                | -         |    -3.43 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           70 |      658 | 2024-06-04 | 9z             | L   | 0.955      | -            | -                | -                | -         |    -1.86 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           69 |      985 | 2024-05-22 | BESTIA         | L   | 0.867      | -            | -                | -                | -         |   -15.72 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           68 |      986 | 2024-05-22 | BESTIA         | L   | 0.867      | -            | -                | -                | -         |   -16.92 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           67 |     1056 | 2024-05-20 | RED Canids     | W   | 0.855      | 0.450        | 0.115 (0.044)    | 0.698 (0.268)    | 0 (0.000) |    16.70 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           66 |     1058 | 2024-05-20 | RED Canids     | L   | 0.855      | -            | -                | -                | -         |   -10.14 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           65 |     1116 | 2024-05-18 | 9z             | L   | 0.841      | -            | -                | -                | -         |    -1.71 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           64 |     1150 | 2024-05-17 | Case           | W   | 0.835      | 0.371        | -                | 0.582 (0.180)    | 0 (0.000) |     5.08 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           63 |     1183 | 2024-05-16 | RED Canids     | L   | 0.828      | -            | -                | -                | -         |   -11.53 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           62 |     1229 | 2024-05-15 | ex-2GAME       | W   | 0.822      | -            | -                | -                | 0 (0.000) |     1.97 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           61 |     1231 | 2024-05-15 | ex-2GAME       | W   | 0.821      | -            | -                | -                | 0 (0.000) |     2.00 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           60 |     1245 | 2024-05-15 | Imperial       | L   | 0.820      | -            | -                | -                | -         |    -3.96 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           59 |     1294 | 2024-05-14 | Sharks         | W   | 0.814      | -            | -                | -                | -         |     8.37 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           58 |     1307 | 2024-05-14 | ODDIK          | W   | 0.813      | 0.384        | -                | 0.602 (0.188)    | -         |     7.08 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           57 |     1325 | 2024-05-13 | Hype           | W   | 0.807      | -            | -                | -                | -         |     3.51 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           56 |     1354 | 2024-05-12 | Vikings KR     | W   | 0.800      | -            | -                | -                | -         |     3.40 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           55 |     1414 | 2024-05-09 | paiN           | W   | 0.782      | 0.450        | 0.478 (0.168)    | 0.768 (0.271)    | -         |    22.46 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           54 |     1420 | 2024-05-09 | paiN           | L   | 0.782      | -            | -                | -                | -         |    -2.02 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           53 |     1892 | 2024-04-18 | paiN           | L   | 0.643      | -            | -                | -                | -         |    -1.55 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           52 |     1897 | 2024-04-18 | Imperial       | L   | 0.641      | -            | -                | -                | -         |    -2.19 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           51 |     1944 | 2024-04-17 | ODDIK          | W   | 0.636      | -            | -                | -                | -         |     5.52 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           50 |     1954 | 2024-04-17 | Solid          | W   | 0.634      | -            | -                | -                | -         |     4.63 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           49 |     1984 | 2024-04-16 | Hype           | W   | 0.628      | -            | -                | -                | -         |     3.26 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           48 |     2044 | 2024-04-13 | Galorys        | L   | 0.606      | -            | -                | -                | -         |   -14.73 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           47 |     2109 | 2024-04-10 | Imperial       | W   | 0.588      | 0.450        | 0.390 (0.103)    | 0.646 (0.171)    | -         |    16.71 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           46 |     2113 | 2024-04-10 | Imperial       | L   | 0.588      | -            | -                | -                | -         |    -1.76 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           45 |     2163 | 2024-04-09 | ODDIK          | W   | 0.582      | -            | -                | -                | -         |     5.19 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           44 |     2168 | 2024-04-09 | ODDIK          | W   | 0.581      | -            | -                | -                | -         |     5.42 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           43 |     2204 | 2024-04-08 | ODDIK          | W   | 0.574      | -            | -                | -                | -         |     5.59 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           42 |     2253 | 2024-04-06 | BESTIA         | L   | 0.562      | -            | -                | -                | -         |   -11.66 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           41 |     2255 | 2024-04-06 | Solid          | W   | 0.561      | -            | -                | -                | -         |     4.53 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           40 |     2270 | 2024-04-05 | MIBR           | L   | 0.555      | -            | -                | -                | -         |    -1.29 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           39 |     2271 | 2024-04-05 | MIBR           | W   | 0.555      | 0.450        | 0.270 (0.067)    | -                | -         |    16.33 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           38 |     2298 | 2024-04-04 | Corinthians    | W   | 0.548      | -            | -                | -                | -         |     0.73 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           37 |     2304 | 2024-04-04 | Corinthians    | W   | 0.548      | -            | -                | -                | -         |     0.73 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           36 |     2316 | 2024-04-04 | RED Canids     | L   | 0.547      | -            | -                | -                | -         |    -6.30 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           35 |     2332 | 2024-04-03 | MIBR           | L   | 0.542      | -            | -                | -                | -         |    -1.11 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           34 |     2345 | 2024-04-03 | BESTIA         | W   | 0.541      | -            | -                | -                | -         |     6.46 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           33 |     2382 | 2024-04-02 | MIBR           | L   | 0.535      | -            | -                | -                | -         |    -1.07 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           32 |     2386 | 2024-04-02 | BESTIA         | W   | 0.534      | -            | -                | -                | -         |     6.56 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           31 |     2470 | 2024-03-27 | Galorys        | L   | 0.495      | -            | -                | -                | -         |   -11.91 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           30 |     2476 | 2024-03-27 | Galorys        | W   | 0.495      | -            | -                | -                | -         |     3.68 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           29 |     2751 | 2024-03-13 | Intense        | W   | 0.401      | -            | -                | -                | -         |     0.65 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           28 |     2757 | 2024-03-13 | Solid          | L   | 0.400      | -            | -                | -                | -         |    -9.40 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           27 |     2784 | 2024-03-12 | MIBR           | W   | 0.394      | 0.435        | 0.270 (0.046)    | -                | -         |    11.65 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           26 |     2814 | 2024-03-11 | Sharks         | W   | 0.386      | -            | -                | -                | -         |     4.73 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           25 |     2858 | 2024-03-09 | Corinthians    | W   | 0.373      | -            | -                | -                | -         |     0.51 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           24 |     2894 | 2024-03-07 | Case           | L   | 0.361      | -            | -                | -                | -         |    -8.60 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           23 |     2919 | 2024-03-06 | Solid          | L   | 0.355      | -            | -                | -                | -         |    -8.27 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           22 |     2921 | 2024-03-06 | Solid          | W   | 0.355      | -            | -                | -                | -         |     2.94 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           21 |     2986 | 2024-03-04 | Case           | W   | 0.342      | -            | -                | -                | -         |     2.79 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           20 |     2987 | 2024-03-04 | Case           | W   | 0.342      | -            | -                | -                | -         |     2.85 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           19 |     3144 | 2024-02-25 | Imperial       | W   | 0.288      | 0.435        | 0.390 (0.049)    | -                | -         |     8.29 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           18 |     3174 | 2024-02-24 | Sharks         | W   | 0.281      | -            | -                | -                | -         |     3.46 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           17 |     3225 | 2024-02-21 | W7M            | L   | 0.262      | -            | -                | -                | -         |    -6.75 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           16 |     3229 | 2024-02-21 | W7M            | W   | 0.262      | -            | -                | -                | -         |     1.50 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           15 |     3236 | 2024-02-21 | Solid          | W   | 0.260      | -            | -                | -                | -         |     2.39 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           14 |     3261 | 2024-02-20 | Solid          | L   | 0.254      | -            | -                | -                | -         |    -5.77 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           13 |     3357 | 2024-02-16 | 9z             | W   | 0.228      | 0.435        | 0.586 (0.058)    | -                | -         |     7.00 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           12 |     3384 | 2024-02-15 | Imperial       | L   | 0.221      | -            | -                | -                | -         |    -0.57 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           11 |     3387 | 2024-02-15 | W7M            | W   | 0.221      | -            | -                | -                | -         |     1.32 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           10 |     3391 | 2024-02-15 | Sharks         | W   | 0.220      | -            | -                | -                | -         |     2.80 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            9 |     3394 | 2024-02-15 | Sharks         | W   | 0.220      | -            | -                | -                | -         |     2.85 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            8 |     3415 | 2024-02-14 | Intense        | W   | 0.215      | -            | -                | -                | -         |     0.38 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            7 |     3480 | 2024-02-12 | Flamengo       | W   | 0.199      | -            | -                | -                | -         |     0.27 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            6 |     3797 | 2024-01-23 | 9z             | L   | 0.068      | -            | -                | -                | -         |    -0.05 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            5 |     3818 | 2024-01-22 | ODDIK          | W   | 0.062      | -            | -                | -                | -         |     0.72 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            4 |     3855 | 2024-01-21 | Case           | L   | 0.054      | -            | -                | -                | -         |    -1.62 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            3 |     3892 | 2024-01-20 | Imperial       | L   | 0.047      | -            | -                | -                | -         |    -0.12 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            2 |     3936 | 2024-01-19 | RED Canids     | L   | 0.042      | -            | -                | -                | -         |    -0.47 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            1 |     3943 | 2024-01-19 | adalYamigos    | W   | 0.041      | -            | -                | -                | -         |     0.09 | chayJESUS, Lucaozy, PKL, vsm, zevy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,904.03)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $30,000.00     | $30,000.00      |
| 2024-06-09 |      0.988 | $2,000.00      | $1,976.12       |
| 2024-05-19 |      0.848 | $2,000.00      | $1,696.11       |
| 2024-03-14 |      0.408 | $5,000.00      | $2,039.64       |
| 2024-02-25 |      0.288 | $25,000.00     | $7,192.16       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
