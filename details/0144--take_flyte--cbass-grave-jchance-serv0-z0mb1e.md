### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [144](../standings_global.md)<br />
Regional Rank: [38]( ../standings_americas.md)<br />
Final Rank Value:  761.1<br />
<br />
Final Rank Value (761.1) = Starting Rank Value (754.0) + Head To Head Adjustments (7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 754.0
- 400 + ( ( 0.165 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 754.0


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
|           35 |       21 | 2024-07-16 | Perseverance     | W   | 1.000      | 0.477        | 0.006 (0.003)    | 0.268 (0.128)    | 0 (0.000) |    15.68 | cbass, Grave, jchancE, serv0, z0mb1e |
|           34 |       27 | 2024-07-16 | Perseverance     | W   | 1.000      | 0.477        | 0.006 (0.003)    | 0.268 (0.128)    | 0 (0.000) |    17.13 | cbass, Grave, jchancE, serv0, z0mb1e |
|           33 |       74 | 2024-07-15 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -4.38 | cbass, Grave, jchancE, serv0, z0mb1e |
|           32 |       79 | 2024-07-15 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -4.57 | cbass, Grave, jchancE, serv0, z0mb1e |
|           31 |      334 | 2024-06-15 | OMiT             | W   | 0.990      | 0.143        | 0.024 (0.003)    | 0.320 (0.045)    | 0 (0.000) |    20.77 | cbass, Grave, jchancE, serv0, z0mb1e |
|           30 |      369 | 2024-06-14 | E-Xolos LAZER    | W   | 0.983      | 0.143        | 0.016 (0.002)    | 0.318 (0.045)    | 0 (0.000) |    20.32 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |     1125 | 2024-05-22 | Wildcard         | L   | 0.830      | -            | -                | -                | -         |    -3.58 | cbass, Grave, jchancE, serv0, z0mb1e |
|           28 |     1129 | 2024-05-22 | Wildcard         | L   | 0.829      | -            | -                | -                | -         |    -3.71 | cbass, Grave, jchancE, serv0, z0mb1e |
|           27 |     1175 | 2024-05-21 | Elevate          | L   | 0.823      | -            | -                | -                | -         |    -3.42 | cbass, Champ, jchancE, serv0, z0mb1e |
|           26 |     1179 | 2024-05-21 | Elevate          | L   | 0.822      | -            | -                | -                | -         |    -3.54 | cbass, Champ, jchancE, serv0, z0mb1e |
|           25 |     1212 | 2024-05-20 | MIGHT            | W   | 0.816      | 0.477        | 0.000 (0.000)    | 0.082 (0.032)    | 0 (0.000) |     7.74 | cbass, Grave, jchancE, serv0, z0mb1e |
|           24 |     1217 | 2024-05-20 | MIGHT            | L   | 0.816      | -            | -                | -                | -         |   -18.43 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     1341 | 2024-05-16 | Limitless        | L   | 0.789      | -            | -                | -                | -         |    -8.22 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     1342 | 2024-05-16 | Limitless        | L   | 0.789      | -            | -                | -                | -         |    -8.76 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     1382 | 2024-05-15 | M80              | L   | 0.783      | -            | -                | -                | -         |    -1.01 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     1388 | 2024-05-15 | M80              | L   | 0.782      | -            | -                | -                | -         |    -1.02 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     1434 | 2024-05-14 | NRG              | L   | 0.776      | -            | -                | -                | -         |    -5.43 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     1440 | 2024-05-14 | NRG              | L   | 0.776      | -            | -                | -                | -         |    -5.70 | cbass, Grave, jchancE, serv0, z0mb1e |
|           17 |     1919 | 2024-04-23 | Nouns            | W   | 0.636      | 0.477        | 0.087 (0.026)    | 0.566 (0.172)    | 0 (0.000) |    16.37 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     1921 | 2024-04-23 | Nouns            | L   | 0.636      | -            | -                | -                | -         |    -3.58 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     2259 | 2024-04-10 | FLUFFY AIMERS    | W   | 0.550      | 0.477        | 0.016 (0.004)    | 0.140 (0.037)    | 0 (0.000) |    10.57 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     2264 | 2024-04-10 | FLUFFY AIMERS    | L   | 0.549      | -            | -                | -                | -         |    -6.83 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     2316 | 2024-04-09 | Party Astronauts | L   | 0.543      | -            | -                | -                | -         |    -3.04 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     2323 | 2024-04-09 | Party Astronauts | L   | 0.542      | -            | -                | -                | -         |    -3.13 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     2448 | 2024-04-04 | Limitless        | W   | 0.509      | 0.477        | 0.002 (0.000)    | 0.214 (0.052)    | 0 (0.000) |     6.98 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     2453 | 2024-04-04 | Limitless        | L   | 0.509      | -            | -                | -                | -         |    -9.28 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     2624 | 2024-03-27 | BOSS             | L   | 0.456      | -            | -                | -                | -         |    -5.42 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     2628 | 2024-03-27 | BOSS             | W   | 0.456      | 0.477        | 0.022 (0.005)    | 0.345 (0.075)    | 0 (0.000) |     9.17 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     2867 | 2024-03-14 | Mythic           | L   | 0.370      | -            | -                | -                | -         |    -4.16 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     2871 | 2024-03-14 | Mythic           | L   | 0.369      | -            | -                | -                | -         |    -4.29 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     3116 | 2024-03-05 | LAG              | L   | 0.310      | -            | -                | -                | -         |    -2.55 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     3118 | 2024-03-05 | LAG              | L   | 0.310      | -            | -                | -                | -         |    -2.61 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     3373 | 2024-02-22 | Party Astronauts | L   | 0.229      | -            | -                | -                | -         |    -1.47 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     3614 | 2024-02-13 | Perseverance     | W   | 0.170      | 0.477        | 0.006 (0.001)    | 0.268 (0.022)    | 0 (0.000) |     2.93 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     3617 | 2024-02-13 | Perseverance     | L   | 0.169      | -            | -                | -                | -         |    -2.44 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($759.61)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
