### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Rickeh, Texta, tucks<br />
Global Rank: [159](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_16.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_01_16.md)<br />
<br />
Final Rank Value:  701.0<br />
<br />
Final Rank Value (701.0) = Starting Rank Value (721.3) + Head To Head Adjustments (-20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 721.3
- 400 + ( ( 0.162 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 721.3


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
|           33 |      818 | 2024-11-15 | los kogutos    | L   | 0.784      | -            | -                | -                | -         |    -3.75 | gump, pain, Rickeh, Texta, tucks |
|           32 |      821 | 2024-11-15 | Canada         | W   | 0.784      | 0.617        | 0.002 (0.001)    | 0.065 (0.031)    | 1 (0.784) |     9.87 | gump, pain, Rickeh, Texta, tucks |
|           31 |      835 | 2024-11-14 | Turkey         | L   | 0.779      | -            | -                | -                | -         |   -12.61 | gump, pain, Rickeh, Texta, tucks |
|           30 |      885 | 2024-11-13 | Norway         | L   | 0.771      | -            | -                | -                | -         |   -13.99 | gump, pain, Rickeh, Texta, tucks |
|           29 |      890 | 2024-11-13 | Metizport      | L   | 0.771      | -            | -                | -                | -         |    -0.96 | gump, pain, Rickeh, Texta, tucks |
|           28 |     1367 | 2024-10-20 | FlyQuest       | L   | 0.609      | -            | -                | -                | -         |    -0.61 | gump, pain, Rickeh, Texta, tucks |
|           27 |     1393 | 2024-10-19 | Housebets      | W   | 0.603      | 0.333        | 0.004 (0.001)    | 0.078 (0.016)    | 0 (0.000) |     7.46 | gump, pain, Rickeh, Texta, tucks |
|           26 |     1421 | 2024-10-18 | FlyQuest       | L   | 0.596      | -            | -                | -                | -         |    -0.58 | gump, pain, Rickeh, Texta, tucks |
|           25 |     1448 | 2024-10-17 | The Art of War | W   | 0.590      | 0.333        | 0.003 (0.001)    | 0.200 (0.039)    | 0 (0.000) |     8.52 | gump, pain, Rickeh, Texta, tucks |
|           24 |     1693 | 2024-10-05 | The Art of War | L   | 0.515      | -            | -                | -                | -         |    -9.02 | gump, pain, Rickeh, Texta, tucks |
|           23 |     1724 | 2024-10-05 | SemperFi       | L   | 0.509      | -            | -                | -                | -         |   -12.43 | gump, pain, Rickeh, Texta, tucks |
|           22 |     1726 | 2024-10-04 | Housebets      | W   | 0.508      | 0.143        | 0.004 (0.000)    | 0.078 (0.006)    | 0 (0.000) |     6.02 | gump, pain, Rickeh, Texta, tucks |
|           21 |     1831 | 2024-10-02 | KZG            | W   | 0.490      | 0.333        | 0.002 (0.000)    | 0.086 (0.014)    | 0 (0.000) |     5.92 | gump, pain, Rickeh, Texta, tucks |
|           20 |     1833 | 2024-10-02 | KZG            | W   | 0.489      | 0.333        | 0.002 (0.000)    | 0.086 (0.014)    | 0 (0.000) |     6.17 | gump, pain, Rickeh, Texta, tucks |
|           19 |     2115 | 2024-09-25 | The Art of War | W   | 0.443      | 0.333        | 0.003 (0.000)    | 0.200 (0.029)    | 0 (0.000) |     6.22 | gump, pain, Rickeh, Texta, tucks |
|           18 |     2119 | 2024-09-25 | The Art of War | L   | 0.443      | -            | -                | -                | -         |    -7.91 | gump, pain, Rickeh, Texta, tucks |
|           17 |     2339 | 2024-09-18 | Housebets      | W   | 0.396      | 0.333        | 0.004 (0.000)    | 0.078 (0.010)    | 0 (0.000) |     5.28 | gump, pain, Rickeh, Texta, tucks |
|           16 |     2343 | 2024-09-18 | Housebets      | L   | 0.396      | -            | -                | -                | -         |    -7.37 | gump, pain, Rickeh, Texta, tucks |
|           15 |     2924 | 2024-08-29 | TALON          | L   | 0.262      | -            | -                | -                | -         |    -5.39 | gump, pain, Rickeh, Texta, tucks |
|           14 |     2966 | 2024-08-28 | Arcade         | W   | 0.257      | -            | -                | -                | 0 (0.000) |     2.99 | gump, pain, Rickeh, Texta, tucks |
|           13 |     3026 | 2024-08-27 | TALON          | L   | 0.250      | -            | -                | -                | -         |    -5.18 | gump, pain, Rickeh, Texta, tucks |
|           12 |     3030 | 2024-08-27 | Arcade         | W   | 0.249      | -            | -                | -                | 0 (0.000) |     2.82 | gump, pain, Rickeh, Texta, tucks |
|           11 |     3227 | 2024-08-22 | Rooster        | L   | 0.216      | -            | -                | -                | -         |    -3.82 | gump, pain, Rickeh, Texta, tucks |
|           10 |     3273 | 2024-08-21 | The Art of War | L   | 0.210      | -            | -                | -                | -         |    -4.00 | gump, pain, Rickeh, Texta, tucks |
|            9 |     3304 | 2024-08-21 | Rooster        | W   | 0.209      | 0.143        | 0.013 (0.000)    | 0.130 (0.004)    | -         |     2.86 | gump, pain, Rickeh, Texta, tucks |
|            8 |     3517 | 2024-08-13 | Vantage        | W   | 0.156      | -            | -                | -                | -         |     1.09 | gump, pain, Rickeh, Texta, tucks |
|            7 |     3523 | 2024-08-13 | Vantage        | W   | 0.156      | -            | -                | -                | -         |     1.10 | gump, pain, Rickeh, Texta, tucks |
|            6 |     3712 | 2024-08-07 | DXA            | L   | 0.116      | -            | -                | -                | -         |    -2.33 | gump, pain, Rickeh, Texta, tucks |
|            5 |     3717 | 2024-08-07 | DXA            | W   | 0.116      | 0.333        | 0.001 (0.000)    | 0.091 (0.004)    | -         |     1.35 | gump, pain, Rickeh, Texta, tucks |
|            4 |     3977 | 2024-07-31 | DXA            | W   | 0.069      | -            | -                | -                | -         |     0.81 | gump, pain, Rickeh, Texta, tucks |
|            3 |     4022 | 2024-07-30 | MANTRA         | W   | 0.063      | -            | -                | -                | -         |     0.74 | gump, pain, Rickeh, Texta, tucks |
|            2 |     4242 | 2024-07-23 | Arcade         | W   | 0.016      | -            | -                | -                | -         |     0.19 | gump, pain, Rickeh, Texta, tucks |
|            1 |     4247 | 2024-07-23 | Arcade         | W   | 0.016      | -            | -                | -                | -         |     0.19 | gump, pain, Rickeh, Texta, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,217.74)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
