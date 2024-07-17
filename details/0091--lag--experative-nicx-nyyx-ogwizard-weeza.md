### Roster Details<br />
Team Name: LAG<br />
Roster: Experative, nicx, Nyyx, ogwizard, Weeza<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [91](../standings_global.md)<br />
Regional Rank: [22]( ../standings_americas.md)<br />
Final Rank Value:  933.6<br />
<br />
Final Rank Value (933.6) = Starting Rank Value (942.3) + Head To Head Adjustments (-8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.156[<sup>2</sup>](#table1)
- LAN Wins: 0.135[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 942.3
- 400 + ( ( 0.253 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 942.3


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
|           46 |       23 | 2024-07-16 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -12.44 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           45 |       29 | 2024-07-16 | Wildcard         | W   | 1.000      | 0.477        | 0.064 (0.031)    | 0.553 (0.264)    | 0 (0.000) |    19.36 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           44 |       72 | 2024-07-15 | Elevate          | W   | 1.000      | 0.477        | 0.042 (0.020)    | 0.583 (0.278)    | 0 (0.000) |    19.93 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           43 |       77 | 2024-07-15 | Elevate          | W   | 1.000      | 0.477        | 0.042 (0.020)    | 0.583 (0.278)    | 0 (0.000) |    21.58 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           42 |      412 | 2024-06-13 | Mythic           | L   | 0.976      | -            | -                | -                | -         |   -16.04 | based, Experative, nicx, Nyyx, ogwizard |
|           41 |      584 | 2024-06-08 | Strife           | W   | 0.943      | 0.371        | 0.012 (0.004)    | -                | 0 (0.000) |     8.62 | based, Experative, nicx, Nyyx, ogwizard |
|           40 |      640 | 2024-06-07 | Wildcard         | L   | 0.936      | -            | -                | -                | -         |    -9.52 | based, Experative, nicx, Nyyx, ogwizard |
|           39 |      724 | 2024-06-06 | Vibe             | W   | 0.927      | -            | -                | -                | 0 (0.000) |     1.83 | based, Experative, nicx, Nyyx, ogwizard |
|           38 |      765 | 2024-06-05 | NRG              | L   | 0.923      | -            | -                | -                | -         |   -12.34 | based, Experative, nicx, Nyyx, ogwizard |
|           37 |      774 | 2024-06-05 | Limitless        | W   | 0.922      | -            | -                | -                | 0 (0.000) |    11.34 | based, Experative, nicx, Nyyx, ogwizard |
|           36 |      817 | 2024-06-04 | Limitless        | W   | 0.916      | 0.477        | 0.008 (0.003)    | -                | 0 (0.000) |    12.20 | based, Experative, nicx, Nyyx, ogwizard |
|           35 |      826 | 2024-06-04 | Retirement Home  | W   | 0.915      | -            | -                | -                | -         |     1.75 | based, Experative, nicx, Nyyx, ogwizard |
|           34 |     1131 | 2024-05-22 | Limitless        | W   | 0.829      | 0.477        | -                | 0.214 (0.085)    | -         |     5.47 | based, Experative, nicx, Nyyx, ogwizard |
|           33 |     1134 | 2024-05-22 | Limitless        | W   | 0.829      | 0.477        | -                | 0.214 (0.085)    | -         |     5.75 | based, Experative, nicx, Nyyx, ogwizard |
|           32 |     1137 | 2024-05-22 | Wildcard         | L   | 0.829      | -            | -                | -                | -         |    -8.31 | based, Experative, nicx, Nyyx, ogwizard |
|           31 |     1381 | 2024-05-15 | NRG              | L   | 0.783      | -            | -                | -                | -         |    -9.16 | based, Experative, nicx, Nyyx, ogwizard |
|           30 |     1389 | 2024-05-15 | NRG              | L   | 0.782      | -            | -                | -                | -         |    -9.78 | based, Experative, nicx, Nyyx, ogwizard |
|           29 |     1435 | 2024-05-14 | Limitless        | W   | 0.776      | -            | -                | -                | -         |     9.29 | based, Experative, nicx, Nyyx, ogwizard |
|           28 |     1442 | 2024-05-14 | Limitless        | L   | 0.776      | -            | -                | -                | -         |   -15.53 | based, Experative, nicx, Nyyx, ogwizard |
|           27 |     1577 | 2024-05-09 | M80              | L   | 0.743      | -            | -                | -                | -         |    -2.53 | based, Experative, nicx, Nyyx, ogwizard |
|           26 |     1582 | 2024-05-09 | M80              | L   | 0.742      | -            | -                | -                | -         |    -2.60 | based, Experative, nicx, Nyyx, ogwizard |
|           25 |     1596 | 2024-05-08 | Party Astronauts | L   | 0.736      | -            | -                | -                | -         |    -8.47 | based, Experative, nicx, Nyyx, ogwizard |
|           24 |     1601 | 2024-05-08 | Party Astronauts | L   | 0.736      | -            | -                | -                | -         |    -9.01 | based, Experative, nicx, Nyyx, ogwizard |
|           23 |     2263 | 2024-04-10 | Mythic           | W   | 0.549      | 0.477        | 0.015 (0.004)    | 0.341 (0.089)    | -         |     6.51 | based, Experative, nicx, Nyyx, ogwizard |
|           22 |     2268 | 2024-04-10 | Mythic           | W   | 0.549      | 0.477        | 0.015 (0.004)    | 0.341 (0.089)    | -         |     6.82 | based, Experative, nicx, Nyyx, ogwizard |
|           21 |     2318 | 2024-04-09 | BOSS             | L   | 0.543      | -            | -                | -                | -         |   -10.16 | based, Experative, nicx, Nyyx, ogwizard |
|           20 |     2321 | 2024-04-09 | BOSS             | L   | 0.542      | -            | -                | -                | -         |   -10.64 | based, Experative, nicx, Nyyx, ogwizard |
|           19 |     2449 | 2024-04-04 | Nouns            | W   | 0.509      | 0.477        | 0.087 (0.021)    | 0.566 (0.137)    | -         |     9.32 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     2454 | 2024-04-04 | Nouns            | L   | 0.509      | -            | -                | -                | -         |    -6.84 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     2495 | 2024-04-03 | Elevate          | L   | 0.503      | -            | -                | -                | -         |    -5.12 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     2498 | 2024-04-03 | Elevate          | W   | 0.502      | 0.477        | 0.042 (0.010)    | 0.583 (0.140)    | -         |    10.97 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     2672 | 2024-03-26 | Wildcard         | L   | 0.450      | -            | -                | -                | -         |    -6.51 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     2676 | 2024-03-26 | Wildcard         | W   | 0.449      | 0.477        | 0.064 (0.014)    | 0.553 (0.119)    | -         |     7.84 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     2758 | 2024-03-20 | Perseverance     | L   | 0.409      | -            | -                | -                | -         |    -9.23 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     2760 | 2024-03-20 | Perseverance     | W   | 0.409      | -            | -                | -                | -         |     3.69 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     2801 | 2024-03-17 | OMiT             | W   | 0.390      | -            | -                | -                | 1 (0.390) |     4.14 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     2803 | 2024-03-17 | Akimbo           | W   | 0.389      | -            | -                | -                | 1 (0.389) |     2.75 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     2813 | 2024-03-17 | WICKED           | W   | 0.388      | -            | -                | -                | 1 (0.388) |     1.75 | based, Experative, nicx, Nyyx, ogwizard |
|            8 |     3050 | 2024-03-07 | FLUFFY AIMERS    | W   | 0.323      | -            | -                | -                | -         |     3.70 | based, Experative, nicx, Nyyx, ogwizard |
|            7 |     3051 | 2024-03-07 | FLUFFY AIMERS    | L   | 0.323      | -            | -                | -                | -         |    -6.61 | based, Experative, nicx, Nyyx, ogwizard |
|            6 |     3079 | 2024-03-06 | MIGHT            | W   | 0.316      | -            | -                | -                | -         |     1.24 | based, Experative, nicx, Nyyx, ogwizard |
|            5 |     3080 | 2024-03-06 | MIGHT            | L   | 0.316      | -            | -                | -                | -         |    -8.80 | based, Experative, nicx, Nyyx, ogwizard |
|            4 |     3116 | 2024-03-05 | Take Flyte       | W   | 0.310      | -            | -                | -                | -         |     2.55 | based, Experative, nicx, Nyyx, ogwizard |
|            3 |     3118 | 2024-03-05 | Take Flyte       | W   | 0.310      | -            | -                | -                | -         |     2.61 | based, Experative, nicx, Nyyx, ogwizard |
|            2 |     3330 | 2024-02-24 | Limitless        | L   | 0.242      | -            | -                | -                | -         |    -6.11 | based, Experative, nicx, Nyyx, ogwizard |
|            1 |     3519 | 2024-02-16 | FLUFFY AIMERS    | L   | 0.189      | -            | -                | -                | -         |    -3.97 | based, Experative, nicx, Nyyx, ogwizard |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,995.31)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.950 | $3,000.00      | $2,848.54       |
| 2024-03-17 |      0.390 | $5,500.00      | $2,146.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
