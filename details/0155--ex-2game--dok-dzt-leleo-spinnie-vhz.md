### Roster Details<br />
Team Name: ex-2GAME<br />
Roster: dok, dzt, leleo, spinnie, vhz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [155](../standings_global.md)<br />
Regional Rank: [43]( ../standings_americas.md)<br />
Final Rank Value:  702.1<br />
<br />
Final Rank Value (702.1) = Starting Rank Value (720.2) + Head To Head Adjustments (-18.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.2
- 400 + ( ( 0.152 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 720.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      741 | 2024-06-01 | Case        | L   | 0.935      | -            | -                | -                | -         |    -7.43 | dok, dzt, leleo, spinnie, vhz |
|           29 |      811 | 2024-05-30 | Solid       | L   | 0.920      | -            | -                | -                | -         |    -7.49 | dok, dzt, leleo, spinnie, vhz |
|           28 |      871 | 2024-05-27 | Vikings KR  | W   | 0.902      | 0.371        | 0.012 (0.004)    | 0.432 (0.145)    | 0 (0.000) |    17.38 | beg0d, dok, dzt, spinnie, vhz |
|           27 |     1020 | 2024-05-21 | BESTIA      | L   | 0.861      | -            | -                | -                | -         |    -3.38 | beg0d, dok, dzt, spinnie, vhz |
|           26 |     1023 | 2024-05-21 | BESTIA      | L   | 0.861      | -            | -                | -                | -         |    -3.49 | beg0d, dok, dzt, spinnie, vhz |
|           25 |     1229 | 2024-05-15 | Fluxo       | L   | 0.822      | -            | -                | -                | -         |    -1.97 | beg0d, dok, dzt, spinnie, vhz |
|           24 |     1231 | 2024-05-15 | Fluxo       | L   | 0.821      | -            | -                | -                | -         |    -2.00 | beg0d, dok, dzt, spinnie, vhz |
|           23 |     1287 | 2024-05-14 | 9z          | L   | 0.815      | -            | -                | -                | -         |    -0.12 | beg0d, dok, dzt, spinnie, vhz |
|           22 |     1292 | 2024-05-14 | 9z          | L   | 0.815      | -            | -                | -                | -         |    -0.12 | beg0d, dok, dzt, spinnie, vhz |
|           21 |     2110 | 2024-04-10 | RED Canids  | L   | 0.588      | -            | -                | -                | -         |    -1.35 | beg0d, dok, dzt, santos, vhz  |
|           20 |     2114 | 2024-04-10 | RED Canids  | L   | 0.588      | -            | -                | -                | -         |    -1.37 | beg0d, dok, dzt, santos, vhz  |
|           19 |     2272 | 2024-04-05 | adalYamigos | W   | 0.555      | 0.450        | 0.000 (0.000)    | 0.123 (0.031)    | 0 (0.000) |     8.23 | beg0d, dok, dzt, santos, vhz  |
|           18 |     2273 | 2024-04-05 | adalYamigos | L   | 0.554      | -            | -                | -                | -         |    -9.46 | beg0d, dok, dzt, santos, vhz  |
|           17 |     2340 | 2024-04-03 | Sharks      | L   | 0.541      | -            | -                | -                | -         |    -2.92 | beg0d, dok, dzt, santos, vhz  |
|           16 |     2343 | 2024-04-03 | Sharks      | L   | 0.541      | -            | -                | -                | -         |    -3.00 | beg0d, dok, dzt, santos, vhz  |
|           15 |     2475 | 2024-03-27 | Corinthians | W   | 0.495      | 0.450        | 0.000 (0.000)    | 0.069 (0.015)    | 0 (0.000) |     3.93 | beg0d, dok, dzt, santos, vhz  |
|           14 |     2478 | 2024-03-27 | Corinthians | L   | 0.495      | -            | -                | -                | -         |   -11.92 | beg0d, dok, dzt, santos, vhz  |
|           13 |     2516 | 2024-03-26 | Galorys     | L   | 0.489      | -            | -                | -                | -         |    -4.89 | beg0d, dok, dzt, santos, vhz  |
|           12 |     2518 | 2024-03-26 | Galorys     | L   | 0.488      | -            | -                | -                | -         |    -5.07 | beg0d, dok, dzt, santos, vhz  |
|           11 |     2599 | 2024-03-20 | Solid       | W   | 0.448      | 0.450        | 0.048 (0.010)    | 0.585 (0.118)    | 0 (0.000) |    10.40 | beg0d, dok, dzt, santos, vhz  |
|           10 |     2600 | 2024-03-20 | Solid       | L   | 0.448      | -            | -                | -                | -         |    -3.72 | beg0d, dok, dzt, santos, vhz  |
|            9 |     2684 | 2024-03-15 | ODDIK       | L   | 0.415      | -            | -                | -                | -         |    -2.79 | beg0d, dok, dzt, santos, vhz  |
|            8 |     2685 | 2024-03-15 | ODDIK       | L   | 0.415      | -            | -                | -                | -         |    -2.85 | beg0d, dok, dzt, santos, vhz  |
|            7 |     2957 | 2024-03-05 | W7M         | W   | 0.348      | 0.450        | 0.001 (0.000)    | 0.404 (0.063)    | 0 (0.000) |     6.62 | beg0d, dok, dzt, santos, vhz  |
|            6 |     2959 | 2024-03-05 | W7M         | W   | 0.348      | 0.450        | 0.001 (0.000)    | 0.404 (0.063)    | 0 (0.000) |     6.81 | beg0d, dok, dzt, santos, vhz  |
|            5 |     3163 | 2024-02-24 | Case        | L   | 0.282      | -            | -                | -                | -         |    -2.46 | beg0d, dok, dzt, santos, vhz  |
|            4 |     3170 | 2024-02-24 | Case        | W   | 0.282      | 0.450        | 0.033 (0.004)    | 0.582 (0.074)    | 0 (0.000) |     6.52 | beg0d, dok, dzt, santos, vhz  |
|            3 |     3228 | 2024-02-21 | Imperial    | L   | 0.262      | -            | -                | -                | -         |    -0.10 | beg0d, dok, dzt, santos, vhz  |
|            2 |     3232 | 2024-02-21 | Imperial    | L   | 0.262      | -            | -                | -                | -         |    -0.10 | beg0d, dok, dzt, santos, vhz  |
|            1 |     3413 | 2024-02-14 | 9z          | L   | 0.215      | -            | -                | -                | -         |    -0.02 | beg0d, dok, dzt, santos, vhz  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($889.25)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
