### Roster Details<br />
Team Name: LAG<br />
Roster: Experative, nicx, Nyyx, ogwizard, Weeza<br />
Global Rank: [151](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [42]( ../standings_americas.md)<br />
<br />
Final Rank Value:  712.5<br />
<br />
Final Rank Value (712.5) = Starting Rank Value (819.1) + Head To Head Adjustments (-106.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.124[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 819.1
- 400 + ( ( 0.212 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 819.1


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
|           61 |      149 | 2024-08-09 | InControl        | L   | 1.000      | -            | -                | -                | -         |   -23.93 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           60 |      202 | 2024-08-07 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.79 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           59 |      204 | 2024-08-07 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.82 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           58 |      255 | 2024-08-06 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -7.08 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           57 |      260 | 2024-08-06 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -7.54 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           56 |      295 | 2024-08-05 | jahsdnmasjdm     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.55 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           55 |      462 | 2024-07-31 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -13.84 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           54 |      467 | 2024-07-31 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -15.11 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           53 |      558 | 2024-07-29 | Revenge Nation   | L   | 1.000      | -            | -                | -                | -         |   -19.68 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           52 |      683 | 2024-07-25 | DETONATE         | L   | 1.000      | -            | -                | -                | -         |   -25.92 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           51 |      710 | 2024-07-24 | Limitless        | W   | 1.000      | 0.477        | 0.005 (0.002)    | 0.156 (0.074)    | 0 (0.000) |     9.50 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           50 |      714 | 2024-07-24 | Limitless        | W   | 1.000      | 0.477        | 0.005 (0.002)    | 0.156 (0.074)    | 0 (0.000) |    10.25 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           49 |      832 | 2024-07-20 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -9.46 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           48 |      966 | 2024-07-17 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -16.10 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           47 |      973 | 2024-07-17 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -17.58 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           46 |     1034 | 2024-07-16 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -12.33 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           45 |     1040 | 2024-07-16 | Wildcard         | W   | 1.000      | 0.477        | 0.052 (0.025)    | 0.515 (0.245)    | 0 (0.000) |    19.48 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           44 |     1083 | 2024-07-15 | Elevate          | W   | 1.000      | 0.477        | 0.027 (0.013)    | 0.536 (0.256)    | 0 (0.000) |    19.98 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           43 |     1088 | 2024-07-15 | Elevate          | W   | 1.000      | 0.477        | 0.027 (0.013)    | 0.536 (0.256)    | 0 (0.000) |    21.64 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           42 |     1423 | 2024-06-13 | Mythic           | L   | 0.788      | -            | -                | -                | -         |   -12.66 | based, Experative, nicx, Nyyx, ogwizard |
|           41 |     1595 | 2024-06-08 | Homyno           | W   | 0.755      | 0.371        | 0.006 (0.002)    | -                | 0 (0.000) |     8.04 | based, Experative, nicx, Nyyx, ogwizard |
|           40 |     1651 | 2024-06-07 | Wildcard         | L   | 0.748      | -            | -                | -                | -         |    -7.44 | based, Experative, nicx, Nyyx, ogwizard |
|           39 |     1735 | 2024-06-06 | Vibe             | W   | 0.740      | -            | -                | -                | -         |     2.12 | based, Experative, nicx, Nyyx, ogwizard |
|           38 |     1776 | 2024-06-05 | NRG              | L   | 0.735      | -            | -                | -                | -         |    -9.21 | based, Experative, nicx, Nyyx, ogwizard |
|           37 |     1785 | 2024-06-05 | Limitless        | W   | 0.734      | -            | -                | -                | -         |     9.75 | based, Experative, nicx, Nyyx, ogwizard |
|           36 |     1828 | 2024-06-04 | Limitless        | W   | 0.729      | 0.477        | 0.005 (0.002)    | 0.156 (0.054)    | -         |    10.32 | based, Experative, nicx, Nyyx, ogwizard |
|           35 |     1837 | 2024-06-04 | Retirement Home  | W   | 0.727      | -            | -                | -                | -         |     2.22 | based, Experative, nicx, Nyyx, ogwizard |
|           34 |     2142 | 2024-05-22 | Limitless        | W   | 0.642      | -            | -                | -                | -         |     5.19 | based, Experative, nicx, Nyyx, ogwizard |
|           33 |     2145 | 2024-05-22 | Limitless        | W   | 0.641      | -            | -                | -                | -         |     5.42 | based, Experative, nicx, Nyyx, ogwizard |
|           32 |     2148 | 2024-05-22 | Wildcard         | L   | 0.641      | -            | -                | -                | -         |    -6.21 | based, Experative, nicx, Nyyx, ogwizard |
|           31 |     2392 | 2024-05-15 | NRG              | L   | 0.595      | -            | -                | -                | -         |    -6.50 | based, Experative, nicx, Nyyx, ogwizard |
|           30 |     2400 | 2024-05-15 | NRG              | L   | 0.595      | -            | -                | -                | -         |    -6.82 | based, Experative, nicx, Nyyx, ogwizard |
|           29 |     2446 | 2024-05-14 | Limitless        | W   | 0.588      | -            | -                | -                | -         |     7.82 | based, Experative, nicx, Nyyx, ogwizard |
|           28 |     2453 | 2024-05-14 | Limitless        | L   | 0.588      | -            | -                | -                | -         |   -10.97 | based, Experative, nicx, Nyyx, ogwizard |
|           27 |     2588 | 2024-05-09 | M80              | L   | 0.555      | -            | -                | -                | -         |    -1.82 | based, Experative, nicx, Nyyx, ogwizard |
|           26 |     2593 | 2024-05-09 | M80              | L   | 0.555      | -            | -                | -                | -         |    -1.85 | based, Experative, nicx, Nyyx, ogwizard |
|           25 |     2607 | 2024-05-08 | Party Astronauts | L   | 0.548      | -            | -                | -                | -         |    -6.13 | based, Experative, nicx, Nyyx, ogwizard |
|           24 |     2612 | 2024-05-08 | Party Astronauts | L   | 0.548      | -            | -                | -                | -         |    -6.42 | based, Experative, nicx, Nyyx, ogwizard |
|           23 |     3274 | 2024-04-10 | Mythic           | W   | 0.362      | 0.477        | -                | 0.311 (0.054)    | -         |     4.92 | based, Experative, nicx, Nyyx, ogwizard |
|           22 |     3279 | 2024-04-10 | Mythic           | W   | 0.361      | -            | -                | -                | -         |     5.08 | based, Experative, nicx, Nyyx, ogwizard |
|           21 |     3329 | 2024-04-09 | BOSS             | L   | 0.355      | -            | -                | -                | -         |    -5.99 | based, Experative, nicx, Nyyx, ogwizard |
|           20 |     3332 | 2024-04-09 | BOSS             | L   | 0.355      | -            | -                | -                | -         |    -6.18 | based, Experative, nicx, Nyyx, ogwizard |
|           19 |     3460 | 2024-04-04 | Nouns            | W   | 0.322      | 0.477        | 0.053 (0.008)    | 0.549 (0.084)    | -         |     6.25 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     3465 | 2024-04-04 | Nouns            | L   | 0.321      | -            | -                | -                | -         |    -3.94 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     3506 | 2024-04-03 | Elevate          | L   | 0.315      | -            | -                | -                | -         |    -3.08 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     3509 | 2024-04-03 | Elevate          | W   | 0.315      | 0.477        | 0.027 (0.004)    | 0.536 (0.080)    | -         |     6.96 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     3683 | 2024-03-26 | Wildcard         | L   | 0.262      | -            | -                | -                | -         |    -3.26 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     3687 | 2024-03-26 | Wildcard         | W   | 0.262      | 0.477        | 0.052 (0.006)    | 0.515 (0.064)    | -         |     5.08 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     3769 | 2024-03-20 | Phoenix          | L   | 0.222      | -            | -                | -                | -         |    -4.49 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     3771 | 2024-03-20 | Phoenix          | W   | 0.221      | -            | -                | -                | -         |     2.52 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     3812 | 2024-03-17 | G3               | W   | 0.203      | -            | -                | -                | 1 (0.203) |     1.66 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     3814 | 2024-03-17 | Akimbo           | W   | 0.201      | -            | -                | -                | 1 (0.201) |     1.74 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     3824 | 2024-03-17 | WICKED           | W   | 0.200      | -            | -                | -                | 1 (0.200) |     1.28 | based, Experative, nicx, Nyyx, ogwizard |
|            8 |     4061 | 2024-03-07 | FLUFFY AIMERS    | W   | 0.135      | -            | -                | -                | -         |     1.65 | based, Experative, nicx, Nyyx, ogwizard |
|            7 |     4062 | 2024-03-07 | FLUFFY AIMERS    | L   | 0.135      | -            | -                | -                | -         |    -2.64 | based, Experative, nicx, Nyyx, ogwizard |
|            6 |     4090 | 2024-03-06 | MIGHT            | W   | 0.129      | -            | -                | -                | -         |     0.67 | based, Experative, nicx, Nyyx, ogwizard |
|            5 |     4091 | 2024-03-06 | MIGHT            | L   | 0.128      | -            | -                | -                | -         |    -3.39 | based, Experative, nicx, Nyyx, ogwizard |
|            4 |     4127 | 2024-03-05 | Take Flyte       | W   | 0.122      | -            | -                | -                | -         |     1.34 | based, Experative, nicx, Nyyx, ogwizard |
|            3 |     4129 | 2024-03-05 | Take Flyte       | W   | 0.122      | -            | -                | -                | -         |     1.35 | based, Experative, nicx, Nyyx, ogwizard |
|            2 |     4341 | 2024-02-24 | Limitless        | L   | 0.054      | -            | -                | -                | -         |    -1.25 | based, Experative, nicx, Nyyx, ogwizard |
|            1 |     4530 | 2024-02-16 | FLUFFY AIMERS    | L   | 0.001      | -            | -                | -                | -         |    -0.02 | based, Experative, nicx, Nyyx, ogwizard |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,399.38)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.762 | $3,000.00      | $2,285.27       |
| 2024-03-17 |      0.203 | $5,500.00      | $1,114.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
