### Roster Details<br />
Team Name: Take Flyte<br />
Roster: CoJoMo, Gabe, mds, shutout, xaler<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [126](../standings_global.md)<br />
Regional Rank: [33]( ../standings_americas.md)<br />
Final Rank Value:  780.9<br />
<br />
Final Rank Value (780.9) = Starting Rank Value (787.3) + Head To Head Adjustments (-6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.3
- 400 + ( ( 0.191 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 787.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |       76 | 2024-06-14 | OMiT             | L   | 1.000      | -            | -                | -                | -         |   -13.13 | CoJoMo, Gabe, mds, shutout, xaler  |
|           40 |      529 | 2024-06-04 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -12.38 | CoJoMo, Gabe, Louie, mds, shutout  |
|           39 |      832 | 2024-05-22 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -15.86 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           38 |      835 | 2024-05-22 | BOSS             | W   | 1.000      | 0.477        | 0.021 (0.010)    | 0.386 (0.184)    | 0 (0.000) |    15.63 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           37 |      880 | 2024-05-21 | NRG              | W   | 1.000      | 0.477        | 0.024 (0.011)    | 0.507 (0.242)    | 0 (0.000) |    23.72 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           36 |      882 | 2024-05-21 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.27 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           35 |      915 | 2024-05-20 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |   -17.38 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           34 |      920 | 2024-05-20 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.016 (0.008)    | 0.311 (0.148)    | 0 (0.000) |    13.98 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           33 |     1082 | 2024-05-15 | Mythic           | L   | 0.978      | -            | -                | -                | -         |   -13.38 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           32 |     1088 | 2024-05-15 | Mythic           | W   | 0.978      | 0.477        | 0.013 (0.006)    | 0.377 (0.176)    | 0 (0.000) |    17.63 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           31 |     1150 | 2024-05-14 | Elevate          | L   | 0.971      | -            | -                | -                | -         |    -8.61 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           30 |     1154 | 2024-05-14 | Elevate          | L   | 0.970      | -            | -                | -                | -         |    -9.24 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           29 |     1206 | 2024-05-12 | NRG              | L   | 0.958      | -            | -                | -                | -         |    -8.89 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           28 |     1213 | 2024-05-12 | Mythic           | W   | 0.956      | 0.270        | 0.013 (0.003)    | 0.377 (0.097)    | 0 (0.000) |    17.28 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           27 |     1234 | 2024-05-11 | BOSS             | W   | 0.950      | 0.270        | 0.021 (0.005)    | 0.386 (0.099)    | 0 (0.000) |    17.56 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           26 |     1238 | 2024-05-11 | NRG              | L   | 0.950      | -            | -                | -                | -         |    -8.75 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           25 |     1242 | 2024-05-11 | Party Astronauts | W   | 0.949      | 0.270        | 0.055 (0.014)    | 0.600 (0.154)    | 0 (0.000) |    23.14 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           24 |     1302 | 2024-05-08 | Nouns            | L   | 0.931      | -            | -                | -                | -         |    -6.22 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           23 |     1304 | 2024-05-08 | Nouns            | L   | 0.931      | -            | -                | -                | -         |    -6.57 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           22 |     1813 | 2024-04-17 | Nouns            | L   | 0.790      | -            | -                | -                | -         |    -5.08 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           21 |     1964 | 2024-04-10 | MIGHT            | L   | 0.745      | -            | -                | -                | -         |   -18.09 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           20 |     1971 | 2024-04-10 | MIGHT            | W   | 0.744      | -            | -                | -                | 0 (0.000) |     5.21 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           19 |     2148 | 2024-04-04 | Carpe Diem       | W   | 0.705      | 0.477        | 0.007 (0.002)    | 0.278 (0.094)    | 0 (0.000) |    10.12 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           18 |     2154 | 2024-04-04 | Carpe Diem       | W   | 0.704      | 0.477        | 0.007 (0.002)    | 0.278 (0.094)    | 0 (0.000) |    10.77 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           17 |     2196 | 2024-04-03 | Limitless        | W   | 0.698      | -            | -                | -                | -         |     8.35 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           16 |     2199 | 2024-04-03 | Limitless        | W   | 0.698      | -            | -                | -                | -         |     8.85 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           15 |     2246 | 2024-04-02 | Party Astronauts | L   | 0.692      | -            | -                | -                | -         |    -4.86 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           14 |     2250 | 2024-04-02 | BOSS             | L   | 0.690      | -            | -                | -                | -         |    -9.03 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           13 |     2335 | 2024-03-27 | M80              | L   | 0.651      | -            | -                | -                | -         |    -1.82 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           12 |     2340 | 2024-03-27 | M80              | L   | 0.651      | -            | -                | -                | -         |    -1.85 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           11 |     2461 | 2024-03-20 | LAG              | W   | 0.605      | 0.477        | 0.021 (0.006)    | 0.421 (0.121)    | -         |    13.11 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           10 |     2463 | 2024-03-20 | LAG              | L   | 0.604      | -            | -                | -                | -         |    -5.94 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            9 |     2477 | 2024-03-19 | Party Astronauts | L   | 0.598      | -            | -                | -                | -         |    -4.32 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            8 |     2480 | 2024-03-19 | Party Astronauts | L   | 0.598      | -            | -                | -                | -         |    -4.49 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            7 |     2575 | 2024-03-14 | Wildcard         | L   | 0.564      | -            | -                | -                | -         |    -4.26 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            6 |     2577 | 2024-03-14 | Wildcard         | L   | 0.564      | -            | -                | -                | -         |    -4.42 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            5 |     2607 | 2024-03-13 | Mythic           | W   | 0.558      | -            | -                | -                | -         |    10.46 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            4 |     2648 | 2024-03-12 | bubibabu         | W   | 0.551      | -            | -                | -                | -         |     1.88 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            3 |     3074 | 2024-02-22 | MIGHT            | L   | 0.424      | -            | -                | -                | -         |   -10.35 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            2 |     3317 | 2024-02-13 | One More         | L   | 0.365      | -            | -                | -                | -         |    -6.75 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            1 |     3320 | 2024-02-13 | One More         | W   | 0.365      | -            | -                | -                | -         |     4.83 | BeaKie, CoJoMo, Gabe, mds, shutout |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,600.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
