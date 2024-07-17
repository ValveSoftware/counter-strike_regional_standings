### Roster Details<br />
Team Name: M80<br />
Roster: Lake, reck, s1n, slaxz-, Swisher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [28](../standings_global.md)<br />
Regional Rank: [8]( ../standings_americas.md)<br />
Final Rank Value:  1291.7<br />
<br />
Final Rank Value (1291.7) = Starting Rank Value (1257.6) + Head To Head Adjustments (34.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.603[<sup>1</sup>](#table2)
- Bounty Collected: 0.462[<sup>2</sup>](#table1)
- Opponent Network: 0.229[<sup>2</sup>](#table1)
- LAN Wins: 0.304[<sup>2</sup>](#table1)

The average of these factors is 0.399<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1257.6
- 400 + ( ( 0.399 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1257.6


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
|           55 |        1 | 2024-07-17 | Vitality         | L   | 1.000      | -            | -                | -                | -         |    -0.68 | Lake, reck, s1n, slaxz-, Swisher        |
|           54 |      522 | 2024-06-09 | Wildcard         | W   | 0.950      | 0.477        | 0.064 (0.029)    | 0.553 (0.250)    | 0 (0.000) |     5.78 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           53 |      536 | 2024-06-09 | NRG              | L   | 0.947      | -            | -                | -                | -         |   -25.47 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           52 |      589 | 2024-06-08 | Legacy           | W   | 0.942      | 0.143        | 0.178 (0.024)    | -                | 0 (0.000) |     7.18 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           51 |      696 | 2024-06-06 | Wildcard         | W   | 0.930      | 0.477        | 0.064 (0.028)    | 0.553 (0.245)    | 0 (0.000) |     5.20 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           50 |      716 | 2024-06-06 | Wildcard         | W   | 0.928      | -            | -                | -                | 0 (0.000) |     5.91 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           49 |      726 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.927      | -            | -                | -                | -         |     1.01 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           48 |      766 | 2024-06-05 | Nouns            | W   | 0.923      | 0.477        | 0.087 (0.038)    | 0.566 (0.249)    | -         |     5.95 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           47 |     1023 | 2024-05-28 | HEROIC           | L   | 0.867      | -            | -                | -                | -         |    -2.40 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           46 |     1041 | 2024-05-27 | FaZe             | L   | 0.861      | -            | -                | -                | -         |    -0.74 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           45 |     1096 | 2024-05-24 | Nouns            | W   | 0.843      | 0.384        | 0.087 (0.028)    | 0.566 (0.183)    | -         |     5.27 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           44 |     1111 | 2024-05-23 | Wildcard         | W   | 0.835      | 0.384        | 0.064 (0.021)    | -                | -         |     5.09 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           43 |     1136 | 2024-05-22 | Party Astronauts | L   | 0.829      | -            | -                | -                | -         |   -21.64 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           42 |     1141 | 2024-05-22 | Party Astronauts | W   | 0.829      | 0.477        | 0.063 (0.025)    | 0.604 (0.239)    | -         |     4.21 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           41 |     1147 | 2024-05-22 | Mythic           | W   | 0.828      | -            | -                | -                | -         |     2.11 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           40 |     1211 | 2024-05-20 | NRG              | W   | 0.816      | 0.477        | -                | 0.515 (0.200)    | -         |     4.00 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           39 |     1216 | 2024-05-20 | NRG              | W   | 0.816      | 0.477        | -                | 0.515 (0.200)    | -         |     4.16 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           38 |     1226 | 2024-05-20 | E-Xolos LAZER    | W   | 0.815      | -            | -                | -                | -         |     1.50 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           37 |     1250 | 2024-05-19 | BOSS             | W   | 0.809      | -            | -                | -                | -         |     1.86 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           36 |     1252 | 2024-05-19 | BOSS             | W   | 0.808      | -            | -                | -                | -         |     1.89 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           35 |     1275 | 2024-05-18 | Nouns            | L   | 0.802      | -            | -                | -                | -         |   -21.58 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           34 |     1309 | 2024-05-17 | regain           | W   | 0.796      | -            | -                | -                | -         |     0.27 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           33 |     1382 | 2024-05-15 | Take Flyte       | W   | 0.783      | -            | -                | -                | -         |     1.01 | malbsMd, reck, slaxz-, stamina, Swisher |
|           32 |     1388 | 2024-05-15 | Take Flyte       | W   | 0.782      | -            | -                | -                | -         |     1.02 | malbsMd, reck, slaxz-, stamina, Swisher |
|           31 |     1431 | 2024-05-14 | Elevate          | W   | 0.776      | 0.477        | -                | 0.583 (0.216)    | -         |     4.84 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           30 |     1437 | 2024-05-14 | Elevate          | W   | 0.776      | 0.477        | -                | 0.583 (0.216)    | -         |     5.05 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           29 |     1560 | 2024-05-10 | Limitless        | W   | 0.749      | -            | -                | -                | -         |     0.71 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           28 |     1562 | 2024-05-10 | Limitless        | W   | 0.749      | -            | -                | -                | -         |     0.72 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           27 |     1577 | 2024-05-09 | LAG              | W   | 0.743      | -            | -                | -                | -         |     2.53 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           26 |     1582 | 2024-05-09 | LAG              | W   | 0.742      | -            | -                | -                | -         |     2.60 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           25 |     1808 | 2024-04-28 | G2               | L   | 0.668      | -            | -                | -                | -         |    -0.58 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           24 |     1833 | 2024-04-27 | TYLOO            | W   | 0.660      | 0.889        | 0.032 (0.019)    | -                | 1 (0.660) |     1.61 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           23 |     1853 | 2024-04-26 | BetBoom          | L   | 0.655      | -            | -                | -                | -         |    -3.60 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           22 |     1863 | 2024-04-26 | G2               | W   | 0.653      | 0.889        | 0.738 (0.429)    | 0.496 (0.288)    | 1 (0.653) |    20.07 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           21 |     1888 | 2024-04-25 | Sharks           | W   | 0.647      | -            | -                | -                | 1 (0.647) |     1.42 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           20 |     1922 | 2024-04-23 | BetBoom          | L   | 0.634      | -            | -                | -                | -         |    -3.39 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           19 |     2008 | 2024-04-19 | Liquid           | W   | 0.610      | 0.143        | 0.494 (0.043)    | -                | -         |    16.49 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           18 |     2015 | 2024-04-19 | Legacy           | W   | 0.609      | -            | -                | -                | -         |     6.55 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           17 |     2058 | 2024-04-18 | Liquid           | L   | 0.603      | -            | -                | -                | -         |    -2.52 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           16 |     2063 | 2024-04-18 | Elevate          | W   | 0.602      | -            | -                | -                | -         |     5.17 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           15 |     2632 | 2024-03-27 | Perseverance     | W   | 0.456      | -            | -                | -                | -         |     0.99 | malbsMd, reck, s1n, stamina, Swisher    |
|           14 |     2637 | 2024-03-27 | Perseverance     | W   | 0.455      | -            | -                | -                | -         |     1.00 | malbsMd, reck, s1n, stamina, Swisher    |
|           13 |     2898 | 2024-03-13 | Wildcard         | L   | 0.363      | -            | -                | -                | -         |    -9.56 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           12 |     2900 | 2024-03-13 | Wildcard         | W   | 0.363      | -            | -                | -                | -         |     1.87 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           11 |     3153 | 2024-03-04 | Legacy           | L   | 0.301      | -            | -                | -                | -         |    -6.47 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           10 |     3179 | 2024-03-03 | Wildcard         | W   | 0.294      | -            | -                | -                | 1 (0.294) |     1.54 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            9 |     3204 | 2024-03-02 | Imperial         | L   | 0.287      | -            | -                | -                | -         |    -2.01 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            8 |     3223 | 2024-03-01 | ODDIK            | W   | 0.281      | -            | -                | -                | 1 (0.281) |     2.02 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            7 |     3785 | 2024-02-02 | Rebels           | L   | 0.094      | -            | -                | -                | -         |    -2.24 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            6 |     3821 | 2024-02-01 | Rooster          | W   | 0.087      | -            | -                | -                | 1 (0.087) |     0.22 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            5 |     3840 | 2024-01-31 | GamerLegion      | L   | 0.080      | -            | -                | -                | -         |    -2.19 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            4 |     4042 | 2024-01-20 | Liquid           | W   | 0.010      | -            | -                | -                | -         |     0.28 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            3 |     4047 | 2024-01-20 | Wildcard         | W   | 0.009      | -            | -                | -                | -         |     0.05 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            2 |     4090 | 2024-01-19 | BOSS             | W   | 0.003      | -            | -                | -                | -         |     0.01 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            1 |     4096 | 2024-01-19 | Wildcard         | L   | 0.002      | -            | -                | -                | -         |    -0.07 | malbsMd, maNkz, reck, slaxz-, Swisher   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($53,752.65)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.950 | $25,000.00     | $23,737.84      |
| 2024-06-02 |      0.901 | $4,000.00      | $3,605.57       |
| 2024-05-24 |      0.843 | $20,000.00     | $16,859.34      |
| 2024-05-12 |      0.760 | $12,000.00     | $9,122.94       |
| 2024-02-02 |      0.095 | $4,500.00      | $426.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
