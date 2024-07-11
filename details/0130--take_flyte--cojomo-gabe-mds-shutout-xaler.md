### Roster Details<br />
Team Name: Take Flyte<br />
Roster: CoJoMo, Gabe, mds, shutout, xaler<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [130](../standings_global.md)<br />
Regional Rank: [36]( ../standings_americas.md)<br />
Final Rank Value:  784.5<br />
<br />
Final Rank Value (784.5) = Starting Rank Value (785.9) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.9
- 400 + ( ( 0.183 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 785.9


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
|           41 |      212 | 2024-06-14 | OMiT             | L   | 1.000      | -            | -                | -                | -         |   -13.00 | CoJoMo, Gabe, mds, shutout, xaler  |
|           40 |      665 | 2024-06-04 | Mythic           | L   | 0.954      | -            | -                | -                | -         |   -11.84 | CoJoMo, Gabe, Louie, mds, shutout  |
|           39 |      966 | 2024-05-22 | BOSS             | L   | 0.869      | -            | -                | -                | -         |   -13.79 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           38 |      969 | 2024-05-22 | BOSS             | W   | 0.869      | 0.477        | 0.021 (0.009)    | 0.349 (0.145)    | 0 (0.000) |    13.72 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           37 |     1014 | 2024-05-21 | NRG              | W   | 0.862      | 0.477        | 0.026 (0.011)    | 0.478 (0.196)    | 0 (0.000) |    20.20 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           36 |     1016 | 2024-05-21 | NRG              | L   | 0.862      | -            | -                | -                | -         |    -6.69 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           35 |     1049 | 2024-05-20 | FLUFFY AIMERS    | L   | 0.856      | -            | -                | -                | -         |   -14.59 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           34 |     1054 | 2024-05-20 | FLUFFY AIMERS    | W   | 0.855      | 0.477        | 0.016 (0.006)    | 0.297 (0.121)    | 0 (0.000) |    12.42 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           33 |     1216 | 2024-05-15 | Mythic           | L   | 0.822      | -            | -                | -                | -         |   -11.27 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           32 |     1222 | 2024-05-15 | Mythic           | W   | 0.822      | 0.477        | 0.014 (0.006)    | 0.359 (0.141)    | 0 (0.000) |    14.93 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           31 |     1284 | 2024-05-14 | Elevate          | L   | 0.815      | -            | -                | -                | -         |    -5.19 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           30 |     1288 | 2024-05-14 | Elevate          | L   | 0.815      | -            | -                | -                | -         |    -5.44 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           29 |     1340 | 2024-05-12 | NRG              | L   | 0.802      | -            | -                | -                | -         |    -7.63 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           28 |     1347 | 2024-05-12 | Mythic           | W   | 0.801      | 0.270        | 0.014 (0.003)    | 0.359 (0.078)    | 0 (0.000) |    14.67 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           27 |     1368 | 2024-05-11 | BOSS             | W   | 0.795      | 0.270        | 0.021 (0.005)    | 0.349 (0.075)    | 0 (0.000) |    14.65 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           26 |     1372 | 2024-05-11 | NRG              | L   | 0.794      | -            | -                | -                | -         |    -7.62 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           25 |     1376 | 2024-05-11 | Party Astronauts | W   | 0.794      | 0.270        | 0.062 (0.013)    | 0.589 (0.126)    | 0 (0.000) |    19.73 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           24 |     1436 | 2024-05-08 | Nouns            | L   | 0.775      | -            | -                | -                | -         |    -5.03 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           23 |     1438 | 2024-05-08 | Nouns            | L   | 0.775      | -            | -                | -                | -         |    -5.26 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           22 |     1947 | 2024-04-17 | Nouns            | L   | 0.635      | -            | -                | -                | -         |    -4.05 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           21 |     2098 | 2024-04-10 | MIGHT            | L   | 0.589      | -            | -                | -                | -         |   -14.60 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           20 |     2105 | 2024-04-10 | MIGHT            | W   | 0.589      | -            | -                | -                | 0 (0.000) |     3.90 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           19 |     2282 | 2024-04-04 | Carpe Diem       | W   | 0.549      | 0.477        | 0.008 (0.002)    | 0.245 (0.064)    | 0 (0.000) |     8.43 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           18 |     2288 | 2024-04-04 | Carpe Diem       | W   | 0.549      | 0.477        | 0.008 (0.002)    | 0.245 (0.064)    | 0 (0.000) |     8.85 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           17 |     2330 | 2024-04-03 | Limitless        | W   | 0.542      | -            | -                | -                | -         |     6.51 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           16 |     2333 | 2024-04-03 | Limitless        | W   | 0.542      | -            | -                | -                | -         |     6.82 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           15 |     2380 | 2024-04-02 | Party Astronauts | L   | 0.536      | -            | -                | -                | -         |    -3.61 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           14 |     2384 | 2024-04-02 | BOSS             | L   | 0.535      | -            | -                | -                | -         |    -7.11 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           13 |     2468 | 2024-03-27 | M80              | L   | 0.495      | -            | -                | -                | -         |    -1.34 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           12 |     2473 | 2024-03-27 | M80              | L   | 0.495      | -            | -                | -                | -         |    -1.36 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           11 |     2594 | 2024-03-20 | LAG              | W   | 0.449      | 0.477        | 0.021 (0.004)    | 0.396 (0.085)    | -         |     9.53 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           10 |     2596 | 2024-03-20 | LAG              | L   | 0.449      | -            | -                | -                | -         |    -4.66 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            9 |     2610 | 2024-03-19 | Party Astronauts | L   | 0.443      | -            | -                | -                | -         |    -3.02 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            8 |     2613 | 2024-03-19 | Party Astronauts | L   | 0.443      | -            | -                | -                | -         |    -3.10 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            7 |     2708 | 2024-03-14 | Wildcard         | L   | 0.409      | -            | -                | -                | -         |    -3.34 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            6 |     2710 | 2024-03-14 | Wildcard         | L   | 0.409      | -            | -                | -                | -         |    -3.44 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            5 |     2740 | 2024-03-13 | Mythic           | W   | 0.402      | -            | -                | -                | -         |     7.61 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            4 |     2781 | 2024-03-12 | bubibabu         | W   | 0.395      | -            | -                | -                | -         |     1.33 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            3 |     3207 | 2024-02-22 | MIGHT            | L   | 0.268      | -            | -                | -                | -         |    -6.64 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            2 |     3450 | 2024-02-13 | One More         | L   | 0.209      | -            | -                | -                | -         |    -3.81 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            1 |     3453 | 2024-02-13 | One More         | W   | 0.209      | -            | -                | -                | -         |     2.82 | BeaKie, CoJoMo, Gabe, mds, shutout |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,582.60)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
