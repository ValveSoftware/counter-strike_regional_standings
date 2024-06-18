### Roster Details<br />
Team Name: LAG<br />
Roster: based, Experative, nicx, Nyyx, ogwizard<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [103](../standings_global.md)<br />
Regional Rank: [23]( ../standings_americas.md)<br />
Final Rank Value:  858.2<br />
<br />
Final Rank Value (858.2) = Starting Rank Value (917.2) + Head To Head Adjustments (-59.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.136[<sup>2</sup>](#table1)
- LAN Wins: 0.183[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 917.2
- 400 + ( ( 0.255 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 917.2


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
|           43 |      112 | 2024-06-13 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -14.89 | based, Experative, nicx, Nyyx, ogwizard |
|           42 |      284 | 2024-06-08 | Strife           | W   | 1.000      | 0.384        | 0.013 (0.005)    | -                | 0 (0.000) |     9.76 | based, Experative, nicx, Nyyx, ogwizard |
|           41 |      340 | 2024-06-07 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -9.49 | based, Experative, nicx, Nyyx, ogwizard |
|           40 |      424 | 2024-06-06 | Vibe             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.32 | based, Experative, nicx, Nyyx, ogwizard |
|           39 |      465 | 2024-06-05 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -12.09 | based, Experative, nicx, Nyyx, ogwizard |
|           38 |      474 | 2024-06-05 | Carpe Diem       | W   | 1.000      | 0.384        | -                | 0.278 (0.107)    | 0 (0.000) |    12.23 | based, Experative, nicx, Nyyx, ogwizard |
|           37 |      517 | 2024-06-04 | Carpe Diem       | W   | 1.000      | 0.477        | 0.007 (0.003)    | 0.278 (0.133)    | 0 (0.000) |    13.32 | based, Experative, nicx, Nyyx, ogwizard |
|           36 |      526 | 2024-06-04 | Retirement Home  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.26 | based, Experative, nicx, Nyyx, ogwizard |
|           35 |      833 | 2024-05-22 | Limitless        | W   | 1.000      | 0.477        | -                | 0.227 (0.108)    | 0 (0.000) |     7.08 | based, Experative, nicx, Nyyx, ogwizard |
|           34 |      836 | 2024-05-22 | Limitless        | W   | 1.000      | 0.477        | -                | 0.227 (0.108)    | 0 (0.000) |     7.54 | based, Experative, nicx, Nyyx, ogwizard |
|           33 |      839 | 2024-05-22 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -9.10 | based, Experative, nicx, Nyyx, ogwizard |
|           32 |     1083 | 2024-05-15 | NRG              | L   | 0.978      | -            | -                | -                | -         |    -9.47 | based, Experative, nicx, Nyyx, ogwizard |
|           31 |     1091 | 2024-05-15 | NRG              | L   | 0.978      | -            | -                | -                | -         |   -10.21 | based, Experative, nicx, Nyyx, ogwizard |
|           30 |     1137 | 2024-05-14 | Carpe Diem       | W   | 0.971      | 0.477        | 0.007 (0.003)    | 0.278 (0.129)    | -         |    11.04 | based, Experative, nicx, Nyyx, ogwizard |
|           29 |     1144 | 2024-05-14 | Carpe Diem       | L   | 0.971      | -            | -                | -                | -         |   -19.94 | based, Experative, nicx, Nyyx, ogwizard |
|           28 |     1279 | 2024-05-09 | M80              | L   | 0.938      | -            | -                | -                | -         |    -3.22 | based, Experative, nicx, Nyyx, ogwizard |
|           27 |     1284 | 2024-05-09 | M80              | L   | 0.938      | -            | -                | -                | -         |    -3.33 | based, Experative, nicx, Nyyx, ogwizard |
|           26 |     1298 | 2024-05-08 | Party Astronauts | L   | 0.931      | -            | -                | -                | -         |   -10.20 | based, Experative, nicx, Nyyx, ogwizard |
|           25 |     1303 | 2024-05-08 | Party Astronauts | L   | 0.931      | -            | -                | -                | -         |   -11.00 | based, Experative, nicx, Nyyx, ogwizard |
|           24 |     1965 | 2024-04-10 | Mythic           | W   | 0.745      | 0.477        | 0.013 (0.005)    | 0.377 (0.134)    | -         |    10.21 | based, Experative, nicx, Nyyx, ogwizard |
|           23 |     1970 | 2024-04-10 | Mythic           | W   | 0.744      | 0.477        | 0.013 (0.005)    | 0.377 (0.134)    | -         |    10.90 | based, Experative, nicx, Nyyx, ogwizard |
|           22 |     2020 | 2024-04-09 | BOSS             | L   | 0.738      | -            | -                | -                | -         |   -12.87 | based, Experative, nicx, Nyyx, ogwizard |
|           21 |     2023 | 2024-04-09 | BOSS             | L   | 0.738      | -            | -                | -                | -         |   -13.72 | based, Experative, nicx, Nyyx, ogwizard |
|           20 |     2151 | 2024-04-04 | Nouns            | W   | 0.705      | 0.477        | 0.081 (0.027)    | 0.504 (0.169)    | -         |    14.23 | based, Experative, nicx, Nyyx, ogwizard |
|           19 |     2156 | 2024-04-04 | Nouns            | L   | 0.704      | -            | -                | -                | -         |    -7.97 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     2197 | 2024-04-03 | Elevate          | L   | 0.698      | -            | -                | -                | -         |   -10.92 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     2200 | 2024-04-03 | Elevate          | W   | 0.698      | 0.477        | 0.031 (0.010)    | 0.481 (0.160)    | -         |    11.28 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     2375 | 2024-03-26 | Wildcard         | L   | 0.645      | -            | -                | -                | -         |    -8.16 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     2379 | 2024-03-26 | Wildcard         | W   | 0.645      | 0.477        | 0.068 (0.021)    | 0.572 (0.176)    | -         |    12.46 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     2461 | 2024-03-20 | Take Flyte       | L   | 0.605      | -            | -                | -                | -         |   -13.11 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     2463 | 2024-03-20 | Take Flyte       | W   | 0.604      | -            | -                | -                | -         |     5.94 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     2504 | 2024-03-17 | OMiT             | W   | 0.586      | 0.333        | 0.022 (0.004)    | -                | 1 (0.586) |     6.77 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     2506 | 2024-03-17 | Akimbo           | W   | 0.584      | -            | -                | -                | 1 (0.584) |     4.69 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     2516 | 2024-03-17 | WICKED           | W   | 0.583      | -            | -                | -                | 1 (0.583) |     1.05 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     2753 | 2024-03-07 | FLUFFY AIMERS    | W   | 0.519      | 0.477        | 0.016 (0.004)    | -                | -         |     7.12 | based, Experative, nicx, Nyyx, ogwizard |
|            8 |     2754 | 2024-03-07 | FLUFFY AIMERS    | L   | 0.518      | -            | -                | -                | -         |    -9.44 | based, Experative, nicx, Nyyx, ogwizard |
|            7 |     2782 | 2024-03-06 | MIGHT            | W   | 0.512      | -            | -                | -                | -         |     2.71 | based, Experative, nicx, Nyyx, ogwizard |
|            6 |     2783 | 2024-03-06 | MIGHT            | L   | 0.511      | -            | -                | -                | -         |   -13.63 | based, Experative, nicx, Nyyx, ogwizard |
|            5 |     2819 | 2024-03-05 | One More         | W   | 0.505      | -            | -                | -                | -         |     4.26 | based, Experative, nicx, Nyyx, ogwizard |
|            4 |     2821 | 2024-03-05 | One More         | W   | 0.505      | -            | -                | -                | -         |     4.41 | based, Experative, nicx, Nyyx, ogwizard |
|            3 |     3033 | 2024-02-24 | Limitless        | L   | 0.437      | -            | -                | -                | -         |   -10.71 | based, Experative, nicx, Nyyx, ogwizard |
|            2 |     3222 | 2024-02-16 | FLUFFY AIMERS    | L   | 0.384      | -            | -                | -                | -         |    -7.39 | based, Experative, nicx, Nyyx, ogwizard |
|            1 |     4037 | 2024-01-14 | Bad News Bears   | W   | 0.165      | -            | -                | -                | -         |     0.27 | based, Experative, Nyyx, ogwizard, X-23 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,220.83)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-03-17 |      0.586 | $5,500.00      | $3,220.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
