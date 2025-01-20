### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Rickeh, Texta, tucks<br />
Global Rank: [155](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_20.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_01_20.md)<br />
<br />
Final Rank Value:  700.7<br />
<br />
Final Rank Value (700.7) = Starting Rank Value (720.8) + Head To Head Adjustments (-20.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.8
- 400 + ( ( 0.162 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 720.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      804 | 2024-11-15 | los kogutos    | L   | 0.764      | -            | -                | -                | -         |    -3.62 | gump, pain, Rickeh, Texta, tucks |
|           30 |      807 | 2024-11-15 | Canada         | W   | 0.764      | 0.617        | 0.002 (0.001)    | 0.063 (0.030)    | 1 (0.764) |     9.64 | gump, pain, Rickeh, Texta, tucks |
|           29 |      821 | 2024-11-14 | Turkey         | L   | 0.760      | -            | -                | -                | -         |   -12.32 | gump, pain, Rickeh, Texta, tucks |
|           28 |      871 | 2024-11-13 | Norway         | L   | 0.751      | -            | -                | -                | -         |   -13.63 | gump, pain, Rickeh, Texta, tucks |
|           27 |      876 | 2024-11-13 | Metizport      | L   | 0.751      | -            | -                | -                | -         |    -0.93 | gump, pain, Rickeh, Texta, tucks |
|           26 |     1353 | 2024-10-20 | FlyQuest       | L   | 0.589      | -            | -                | -                | -         |    -0.59 | gump, pain, Rickeh, Texta, tucks |
|           25 |     1379 | 2024-10-19 | Housebets      | W   | 0.583      | 0.333        | 0.004 (0.001)    | 0.078 (0.015)    | 0 (0.000) |     7.24 | gump, pain, Rickeh, Texta, tucks |
|           24 |     1407 | 2024-10-18 | FlyQuest       | L   | 0.576      | -            | -                | -                | -         |    -0.56 | gump, pain, Rickeh, Texta, tucks |
|           23 |     1434 | 2024-10-17 | The Art of War | W   | 0.570      | 0.333        | 0.003 (0.001)    | 0.195 (0.037)    | 0 (0.000) |     8.21 | gump, pain, Rickeh, Texta, tucks |
|           22 |     1679 | 2024-10-05 | The Art of War | L   | 0.495      | -            | -                | -                | -         |    -8.71 | gump, pain, Rickeh, Texta, tucks |
|           21 |     1710 | 2024-10-05 | SemperFi       | L   | 0.490      | -            | -                | -                | -         |   -11.95 | gump, pain, Rickeh, Texta, tucks |
|           20 |     1712 | 2024-10-04 | Housebets      | W   | 0.489      | 0.143        | 0.004 (0.000)    | 0.078 (0.005)    | 0 (0.000) |     5.82 | gump, pain, Rickeh, Texta, tucks |
|           19 |     1817 | 2024-10-02 | KZG            | W   | 0.470      | 0.333        | 0.002 (0.000)    | 0.083 (0.013)    | 0 (0.000) |     5.70 | gump, pain, Rickeh, Texta, tucks |
|           18 |     1819 | 2024-10-02 | KZG            | W   | 0.470      | 0.333        | 0.002 (0.000)    | 0.083 (0.013)    | 0 (0.000) |     5.93 | gump, pain, Rickeh, Texta, tucks |
|           17 |     2101 | 2024-09-25 | The Art of War | W   | 0.423      | 0.333        | 0.003 (0.000)    | 0.195 (0.028)    | 0 (0.000) |     5.92 | gump, pain, Rickeh, Texta, tucks |
|           16 |     2105 | 2024-09-25 | The Art of War | L   | 0.423      | -            | -                | -                | -         |    -7.58 | gump, pain, Rickeh, Texta, tucks |
|           15 |     2325 | 2024-09-18 | Housebets      | W   | 0.377      | 0.333        | 0.004 (0.000)    | 0.078 (0.010)    | 0 (0.000) |     5.02 | gump, pain, Rickeh, Texta, tucks |
|           14 |     2329 | 2024-09-18 | Housebets      | L   | 0.376      | -            | -                | -                | -         |    -7.00 | gump, pain, Rickeh, Texta, tucks |
|           13 |     2910 | 2024-08-29 | TALON          | L   | 0.243      | -            | -                | -                | -         |    -5.00 | gump, pain, Rickeh, Texta, tucks |
|           12 |     2952 | 2024-08-28 | Arcade         | W   | 0.237      | -            | -                | -                | 0 (0.000) |     2.76 | gump, pain, Rickeh, Texta, tucks |
|           11 |     3012 | 2024-08-27 | TALON          | L   | 0.230      | -            | -                | -                | -         |    -4.78 | gump, pain, Rickeh, Texta, tucks |
|           10 |     3016 | 2024-08-27 | Arcade         | W   | 0.229      | -            | -                | -                | 0 (0.000) |     2.60 | gump, pain, Rickeh, Texta, tucks |
|            9 |     3213 | 2024-08-22 | Rooster        | L   | 0.196      | -            | -                | -                | -         |    -3.46 | gump, pain, Rickeh, Texta, tucks |
|            8 |     3259 | 2024-08-21 | The Art of War | L   | 0.191      | -            | -                | -                | -         |    -3.62 | gump, pain, Rickeh, Texta, tucks |
|            7 |     3290 | 2024-08-21 | Rooster        | W   | 0.189      | 0.143        | 0.013 (0.000)    | 0.127 (0.003)    | -         |     2.61 | gump, pain, Rickeh, Texta, tucks |
|            6 |     3503 | 2024-08-13 | Vantage        | W   | 0.137      | -            | -                | -                | -         |     0.96 | gump, pain, Rickeh, Texta, tucks |
|            5 |     3509 | 2024-08-13 | Vantage        | W   | 0.136      | -            | -                | -                | -         |     0.96 | gump, pain, Rickeh, Texta, tucks |
|            4 |     3698 | 2024-08-07 | DXA            | L   | 0.097      | -            | -                | -                | -         |    -1.93 | gump, pain, Rickeh, Texta, tucks |
|            3 |     3703 | 2024-08-07 | DXA            | W   | 0.096      | 0.333        | 0.001 (0.000)    | 0.089 (0.003)    | -         |     1.12 | gump, pain, Rickeh, Texta, tucks |
|            2 |     3963 | 2024-07-31 | DXA            | W   | 0.050      | -            | -                | -                | -         |     0.58 | gump, pain, Rickeh, Texta, tucks |
|            1 |     4008 | 2024-07-30 | MANTRA         | W   | 0.043      | -            | -                | -                | -         |     0.51 | gump, pain, Rickeh, Texta, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,178.39)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
