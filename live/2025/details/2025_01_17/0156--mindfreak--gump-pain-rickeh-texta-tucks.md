### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Rickeh, Texta, tucks<br />
Global Rank: [156](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_17.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_01_17.md)<br />
<br />
Final Rank Value:  701.0<br />
<br />
Final Rank Value (701.0) = Starting Rank Value (721.2) + Head To Head Adjustments (-20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 721.2
- 400 + ( ( 0.162 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 721.2


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
|           33 |      795 | 2024-11-15 | los kogutos    | L   | 0.778      | -            | -                | -                | -         |    -3.72 | gump, pain, Rickeh, Texta, tucks |
|           32 |      798 | 2024-11-15 | Canada         | W   | 0.777      | 0.617        | 0.002 (0.001)    | 0.064 (0.031)    | 1 (0.777) |     9.82 | gump, pain, Rickeh, Texta, tucks |
|           31 |      812 | 2024-11-14 | Turkey         | L   | 0.773      | -            | -                | -                | -         |   -12.52 | gump, pain, Rickeh, Texta, tucks |
|           30 |      862 | 2024-11-13 | Norway         | L   | 0.765      | -            | -                | -                | -         |   -13.88 | gump, pain, Rickeh, Texta, tucks |
|           29 |      867 | 2024-11-13 | Metizport      | L   | 0.764      | -            | -                | -                | -         |    -0.95 | gump, pain, Rickeh, Texta, tucks |
|           28 |     1344 | 2024-10-20 | FlyQuest       | L   | 0.603      | -            | -                | -                | -         |    -0.60 | gump, pain, Rickeh, Texta, tucks |
|           27 |     1370 | 2024-10-19 | Housebets      | W   | 0.597      | 0.333        | 0.004 (0.001)    | 0.078 (0.016)    | 0 (0.000) |     7.39 | gump, pain, Rickeh, Texta, tucks |
|           26 |     1398 | 2024-10-18 | FlyQuest       | L   | 0.590      | -            | -                | -                | -         |    -0.57 | gump, pain, Rickeh, Texta, tucks |
|           25 |     1425 | 2024-10-17 | The Art of War | W   | 0.584      | 0.333        | 0.003 (0.001)    | 0.198 (0.039)    | 0 (0.000) |     8.42 | gump, pain, Rickeh, Texta, tucks |
|           24 |     1670 | 2024-10-05 | The Art of War | L   | 0.509      | -            | -                | -                | -         |    -8.92 | gump, pain, Rickeh, Texta, tucks |
|           23 |     1701 | 2024-10-05 | SemperFi       | L   | 0.503      | -            | -                | -                | -         |   -12.28 | gump, pain, Rickeh, Texta, tucks |
|           22 |     1703 | 2024-10-04 | Housebets      | W   | 0.502      | 0.143        | 0.004 (0.000)    | 0.078 (0.006)    | 0 (0.000) |     5.96 | gump, pain, Rickeh, Texta, tucks |
|           21 |     1808 | 2024-10-02 | KZG            | W   | 0.484      | 0.333        | 0.002 (0.000)    | 0.085 (0.014)    | 0 (0.000) |     5.85 | gump, pain, Rickeh, Texta, tucks |
|           20 |     1810 | 2024-10-02 | KZG            | W   | 0.483      | 0.333        | 0.002 (0.000)    | 0.085 (0.014)    | 0 (0.000) |     6.09 | gump, pain, Rickeh, Texta, tucks |
|           19 |     2092 | 2024-09-25 | The Art of War | W   | 0.437      | 0.333        | 0.003 (0.000)    | 0.198 (0.029)    | 0 (0.000) |     6.13 | gump, pain, Rickeh, Texta, tucks |
|           18 |     2096 | 2024-09-25 | The Art of War | L   | 0.437      | -            | -                | -                | -         |    -7.81 | gump, pain, Rickeh, Texta, tucks |
|           17 |     2316 | 2024-09-18 | Housebets      | W   | 0.390      | 0.333        | 0.004 (0.000)    | 0.078 (0.010)    | 0 (0.000) |     5.20 | gump, pain, Rickeh, Texta, tucks |
|           16 |     2320 | 2024-09-18 | Housebets      | L   | 0.390      | -            | -                | -                | -         |    -7.25 | gump, pain, Rickeh, Texta, tucks |
|           15 |     2901 | 2024-08-29 | TALON          | L   | 0.256      | -            | -                | -                | -         |    -5.27 | gump, pain, Rickeh, Texta, tucks |
|           14 |     2943 | 2024-08-28 | Arcade         | W   | 0.251      | -            | -                | -                | 0 (0.000) |     2.92 | gump, pain, Rickeh, Texta, tucks |
|           13 |     3003 | 2024-08-27 | TALON          | L   | 0.243      | -            | -                | -                | -         |    -5.05 | gump, pain, Rickeh, Texta, tucks |
|           12 |     3007 | 2024-08-27 | Arcade         | W   | 0.243      | -            | -                | -                | 0 (0.000) |     2.75 | gump, pain, Rickeh, Texta, tucks |
|           11 |     3204 | 2024-08-22 | Rooster        | L   | 0.210      | -            | -                | -                | -         |    -3.70 | gump, pain, Rickeh, Texta, tucks |
|           10 |     3250 | 2024-08-21 | The Art of War | L   | 0.204      | -            | -                | -                | -         |    -3.88 | gump, pain, Rickeh, Texta, tucks |
|            9 |     3281 | 2024-08-21 | Rooster        | W   | 0.203      | 0.143        | 0.013 (0.000)    | 0.129 (0.004)    | -         |     2.78 | gump, pain, Rickeh, Texta, tucks |
|            8 |     3494 | 2024-08-13 | Vantage        | W   | 0.150      | -            | -                | -                | -         |     1.05 | gump, pain, Rickeh, Texta, tucks |
|            7 |     3500 | 2024-08-13 | Vantage        | W   | 0.150      | -            | -                | -                | -         |     1.06 | gump, pain, Rickeh, Texta, tucks |
|            6 |     3689 | 2024-08-07 | DXA            | L   | 0.110      | -            | -                | -                | -         |    -2.20 | gump, pain, Rickeh, Texta, tucks |
|            5 |     3694 | 2024-08-07 | DXA            | W   | 0.110      | 0.333        | 0.001 (0.000)    | 0.090 (0.003)    | -         |     1.28 | gump, pain, Rickeh, Texta, tucks |
|            4 |     3954 | 2024-07-31 | DXA            | W   | 0.063      | -            | -                | -                | -         |     0.74 | gump, pain, Rickeh, Texta, tucks |
|            3 |     3999 | 2024-07-30 | MANTRA         | W   | 0.057      | -            | -                | -                | -         |     0.67 | gump, pain, Rickeh, Texta, tucks |
|            2 |     4219 | 2024-07-23 | Arcade         | W   | 0.010      | -            | -                | -                | -         |     0.12 | gump, pain, Rickeh, Texta, tucks |
|            1 |     4224 | 2024-07-23 | Arcade         | W   | 0.010      | -            | -                | -                | -         |     0.12 | gump, pain, Rickeh, Texta, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,205.53)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
