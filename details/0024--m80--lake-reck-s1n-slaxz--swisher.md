### Roster Details<br />
Team Name: M80<br />
Roster: Lake, reck, s1n, slaxz-, Swisher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [24](../standings_global.md)<br />
Regional Rank: [7]( ../standings_americas.md)<br />
Final Rank Value:  1313.6<br />
<br />
Final Rank Value (1313.6) = Starting Rank Value (1293.8) + Head To Head Adjustments (19.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.616[<sup>1</sup>](#table2)
- Bounty Collected: 0.515[<sup>2</sup>](#table1)
- Opponent Network: 0.241[<sup>2</sup>](#table1)
- LAN Wins: 0.394[<sup>2</sup>](#table1)

The average of these factors is 0.442<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1293.8
- 400 + ( ( 0.442 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1293.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      215 | 2024-07-18 | The MongolZ      | L   | 1.000      | -            | -                | -                | -         |    -2.60 | Lake, reck, s1n, slaxz-, Swisher        |
|           52 |      228 | 2024-07-18 | Complexity       | W   | 1.000      | 1.000        | 0.405 (0.405)    | 0.378 (0.378)    | 1 (1.000) |    26.88 | Lake, reck, s1n, slaxz-, Swisher        |
|           51 |      289 | 2024-07-17 | Vitality         | L   | 1.000      | -            | -                | -                | -         |    -1.12 | Lake, reck, s1n, slaxz-, Swisher        |
|           50 |      810 | 2024-06-09 | Wildcard         | W   | 0.902      | 0.477        | 0.069 (0.030)    | 0.557 (0.239)    | 0 (0.000) |     4.69 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           49 |      824 | 2024-06-09 | NRG              | L   | 0.900      | -            | -                | -                | -         |   -24.88 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           48 |      877 | 2024-06-08 | Legacy           | W   | 0.895      | 0.143        | 0.150 (0.019)    | -                | 0 (0.000) |     5.21 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           47 |      984 | 2024-06-06 | Wildcard         | W   | 0.882      | 0.477        | 0.069 (0.029)    | 0.557 (0.234)    | 0 (0.000) |     4.16 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           46 |     1004 | 2024-06-06 | Wildcard         | W   | 0.880      | -            | -                | -                | -         |     4.67 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           45 |     1014 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.880      | -            | -                | -                | -         |     0.98 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           44 |     1054 | 2024-06-05 | Nouns            | W   | 0.876      | 0.477        | 0.073 (0.031)    | 0.589 (0.246)    | -         |     4.62 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           43 |     1311 | 2024-05-28 | HEROIC           | L   | 0.820      | -            | -                | -                | -         |    -4.01 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           42 |     1329 | 2024-05-27 | FaZe             | L   | 0.814      | -            | -                | -                | -         |    -1.30 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           41 |     1384 | 2024-05-24 | Nouns            | W   | 0.796      | 0.384        | 0.073 (0.022)    | -                | -         |     3.98 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           40 |     1399 | 2024-05-23 | Wildcard         | W   | 0.788      | 0.384        | 0.069 (0.021)    | -                | -         |     3.89 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           39 |     1424 | 2024-05-22 | Party Astronauts | L   | 0.782      | -            | -                | -                | -         |   -21.31 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           38 |     1429 | 2024-05-22 | Party Astronauts | W   | 0.781      | 0.477        | 0.053 (0.020)    | 0.591 (0.220)    | -         |     3.12 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           37 |     1435 | 2024-05-22 | Mythic           | W   | 0.781      | -            | -                | -                | -         |     1.54 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           36 |     1499 | 2024-05-20 | NRG              | W   | 0.769      | 0.477        | -                | 0.574 (0.210)    | -         |     2.98 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           35 |     1504 | 2024-05-20 | NRG              | W   | 0.769      | 0.477        | -                | 0.574 (0.210)    | -         |     3.07 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           34 |     1514 | 2024-05-20 | E-Xolos LAZER    | W   | 0.767      | -            | -                | -                | -         |     1.12 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           33 |     1538 | 2024-05-19 | BOSS             | W   | 0.761      | -            | -                | -                | -         |     1.44 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           32 |     1540 | 2024-05-19 | BOSS             | W   | 0.761      | -            | -                | -                | -         |     1.46 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           31 |     1563 | 2024-05-18 | Nouns            | L   | 0.755      | -            | -                | -                | -         |   -21.15 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           30 |     1597 | 2024-05-17 | regain           | W   | 0.749      | -            | -                | -                | -         |     0.23 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           29 |     1670 | 2024-05-15 | Take Flyte       | W   | 0.735      | -            | -                | -                | -         |     0.75 | malbsMd, reck, slaxz-, stamina, Swisher |
|           28 |     1676 | 2024-05-15 | Take Flyte       | W   | 0.735      | -            | -                | -                | -         |     0.75 | malbsMd, reck, slaxz-, stamina, Swisher |
|           27 |     1719 | 2024-05-14 | Elevate          | W   | 0.729      | 0.477        | -                | 0.563 (0.196)    | -         |     3.54 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           26 |     1725 | 2024-05-14 | Elevate          | W   | 0.729      | 0.477        | -                | 0.563 (0.196)    | -         |     3.66 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           25 |     1848 | 2024-05-10 | Limitless        | W   | 0.702      | -            | -                | -                | -         |     0.53 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           24 |     1850 | 2024-05-10 | Limitless        | W   | 0.702      | -            | -                | -                | -         |     0.53 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           23 |     1865 | 2024-05-09 | LAG              | W   | 0.695      | -            | -                | -                | -         |     1.74 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           22 |     1870 | 2024-05-09 | LAG              | W   | 0.695      | -            | -                | -                | -         |     1.77 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           21 |     2096 | 2024-04-28 | G2               | L   | 0.620      | -            | -                | -                | -         |    -0.56 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           20 |     2121 | 2024-04-27 | TYLOO            | W   | 0.613      | -            | -                | -                | 1 (0.613) |     1.03 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           19 |     2141 | 2024-04-26 | BetBoom          | L   | 0.608      | -            | -                | -                | -         |    -5.68 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           18 |     2151 | 2024-04-26 | G2               | W   | 0.606      | 0.889        | 1.000 (0.538)    | 0.515 (0.277)    | 1 (0.606) |    18.59 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           17 |     2176 | 2024-04-25 | Sharks           | W   | 0.600      | -            | -                | -                | 1 (0.600) |     1.03 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           16 |     2210 | 2024-04-23 | BetBoom          | L   | 0.587      | -            | -                | -                | -         |    -5.46 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           15 |     2296 | 2024-04-19 | Liquid           | W   | 0.562      | 0.143        | 0.411 (0.033)    | -                | -         |    12.89 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           14 |     2303 | 2024-04-19 | Legacy           | W   | 0.562      | -            | -                | -                | -         |     4.01 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           13 |     2346 | 2024-04-18 | Liquid           | L   | 0.556      | -            | -                | -                | -         |    -4.68 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           12 |     2351 | 2024-04-18 | Elevate          | W   | 0.555      | -            | -                | -                | -         |     3.40 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           11 |     2920 | 2024-03-27 | Perseverance     | W   | 0.408      | -            | -                | -                | -         |     0.63 | malbsMd, reck, s1n, stamina, Swisher    |
|           10 |     2925 | 2024-03-27 | Perseverance     | W   | 0.408      | -            | -                | -                | -         |     0.63 | malbsMd, reck, s1n, stamina, Swisher    |
|            9 |     3186 | 2024-03-13 | Wildcard         | L   | 0.316      | -            | -                | -                | -         |    -8.77 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            8 |     3188 | 2024-03-13 | Wildcard         | W   | 0.316      | -            | -                | -                | -         |     1.17 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            7 |     3441 | 2024-03-04 | Legacy           | L   | 0.254      | -            | -                | -                | -         |    -6.37 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            6 |     3467 | 2024-03-03 | Wildcard         | W   | 0.247      | -            | -                | -                | 1 (0.247) |     0.93 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            5 |     3492 | 2024-03-02 | Imperial         | L   | 0.240      | -            | -                | -                | -         |    -3.09 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            4 |     3511 | 2024-03-01 | ODDIK            | W   | 0.234      | -            | -                | -                | 1 (0.234) |     1.23 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            3 |     4073 | 2024-02-02 | Rebels           | L   | 0.047      | -            | -                | -                | -         |    -1.22 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            2 |     4109 | 2024-02-01 | Rooster          | W   | 0.040      | -            | -                | -                | 1 (0.040) |     0.07 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            1 |     4128 | 2024-01-31 | GamerLegion      | L   | 0.033      | -            | -                | -                | -         |    -0.96 | dephh, malbsMd, reck, slaxz-, Swisher   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($65,659.40)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-06-09 |      0.902 | $25,000.00     | $22,557.21      |
| 2024-06-02 |      0.854 | $4,000.00      | $3,416.67       |
| 2024-05-24 |      0.796 | $20,000.00     | $15,914.84      |
| 2024-05-12 |      0.713 | $12,000.00     | $8,556.24       |
| 2024-02-02 |      0.048 | $4,500.00      | $214.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
