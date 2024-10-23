### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, Rackem, sliimey, TjP<br />
Global Rank: [139](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_23.md)<br />
Regional Rank: [10]( ../../standings_asia_2024_10_23.md)<br />
<br />
Final Rank Value:  762.2<br />
<br />
Final Rank Value (762.2) = Starting Rank Value (753.2) + Head To Head Adjustments (9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 753.2
- 400 + ( ( 0.180 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 753.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      245 | 2024-10-10 | MANTRA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.26 | asap, chelleos, Rackem, sliimey, TjP |
|           40 |      247 | 2024-10-10 | MANTRA         | L   | 1.000      | -            | -                | -                | -         |   -22.75 | asap, chelleos, Rackem, sliimey, TjP |
|           39 |      277 | 2024-10-09 | KZG            | L   | 1.000      | -            | -                | -                | -         |   -21.52 | asap, chelleos, Rackem, sliimey, TjP |
|           38 |      280 | 2024-10-09 | KZG            | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.193 (0.064)    | 0 (0.000) |     9.54 | asap, chelleos, Rackem, sliimey, TjP |
|           37 |      394 | 2024-10-05 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |    -2.35 | asap, chelleos, jhd, sliimey, TjP    |
|           36 |      431 | 2024-10-04 | SAW            | L   | 1.000      | -            | -                | -                | -         |    -0.64 | asap, chelleos, jhd, sliimey, TjP    |
|           35 |      588 | 2024-09-30 | FlyQuest       | L   | 1.000      | -            | -                | -                | -         |    -1.99 | asap, chelleos, Rackem, sliimey, TjP |
|           34 |      591 | 2024-09-30 | FlyQuest       | L   | 1.000      | -            | -                | -                | -         |    -2.04 | asap, chelleos, Rackem, sliimey, TjP |
|           33 |      794 | 2024-09-25 | Housebets      | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.161 (0.054)    | 0 (0.000) |    10.52 | asap, chelleos, Rackem, sliimey, TjP |
|           32 |      803 | 2024-09-25 | Housebets      | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.161 (0.054)    | 0 (0.000) |    11.40 | asap, chelleos, Rackem, sliimey, TjP |
|           31 |     1163 | 2024-09-13 | Astralis       | L   | 0.932      | -            | -                | -                | -         |    -0.89 | asap, chelleos, dangeR, sliimey, TjP |
|           30 |     1229 | 2024-09-11 | BIG            | L   | 0.919      | -            | -                | -                | -         |    -0.88 | asap, chelleos, dangeR, sliimey, TjP |
|           29 |     1259 | 2024-09-10 | MOUZ           | L   | 0.912      | -            | -                | -                | -         |    -0.06 | asap, chelleos, dangeR, sliimey, TjP |
|           28 |     1598 | 2024-08-29 | TALON          | L   | 0.831      | -            | -                | -                | -         |   -17.61 | asap, chelleos, dangeR, sliimey, TjP |
|           27 |     1661 | 2024-08-28 | TALON          | W   | 0.824      | -            | -                | -                | 0 (0.000) |     7.80 | asap, chelleos, dangeR, sliimey, TjP |
|           26 |     1713 | 2024-08-27 | The Art of War | W   | 0.817      | 0.143        | 0.004 (0.000)    | 0.364 (0.042)    | 0 (0.000) |    11.78 | asap, chelleos, dangeR, sliimey, TjP |
|           25 |     1722 | 2024-08-27 | Vantage        | W   | 0.816      | -            | -                | -                | 0 (0.000) |     5.60 | asap, chelleos, dangeR, sliimey, TjP |
|           24 |     1896 | 2024-08-22 | The Art of War | W   | 0.785      | 0.143        | -                | 0.364 (0.041)    | 0 (0.000) |    11.19 | asap, chelleos, dangeR, sliimey, TjP |
|           23 |     1912 | 2024-08-22 | Mindfreak      | W   | 0.783      | 0.143        | 0.009 (0.001)    | -                | 0 (0.000) |    12.54 | asap, chelleos, dangeR, sliimey, TjP |
|           22 |     1962 | 2024-08-21 | Housebets      | W   | 0.778      | 0.143        | 0.006 (0.001)    | -                | 0 (0.000) |    11.63 | asap, chelleos, dangeR, sliimey, TjP |
|           21 |     1989 | 2024-08-21 | Mindfreak      | L   | 0.777      | -            | -                | -                | -         |   -11.30 | asap, chelleos, dangeR, sliimey, TjP |
|           20 |     2206 | 2024-08-13 | Arcade         | W   | 0.724      | 0.333        | -                | 0.192 (0.046)    | -         |     9.38 | asap, chelleos, dangeR, sliimey, TjP |
|           19 |     2209 | 2024-08-13 | Arcade         | L   | 0.724      | -            | -                | -                | -         |   -13.76 | asap, chelleos, dangeR, sliimey, TjP |
|           18 |     2396 | 2024-08-07 | Vantage        | W   | 0.684      | -            | -                | -                | -         |     5.32 | asap, chelleos, dangeR, sliimey, TjP |
|           17 |     2404 | 2024-08-07 | Vantage        | L   | 0.684      | -            | -                | -                | -         |   -16.63 | asap, chelleos, dangeR, sliimey, TjP |
|           16 |     2923 | 2024-07-23 | The Art of War | L   | 0.584      | -            | -                | -                | -         |   -10.49 | asap, chelleos, dangeR, Hatz, TjP    |
|           15 |     2929 | 2024-07-23 | The Art of War | L   | 0.584      | -            | -                | -                | -         |   -11.03 | asap, chelleos, dangeR, Hatz, TjP    |
|           14 |     3110 | 2024-07-18 | DXA            | W   | 0.551      | 0.333        | -                | 0.221 (0.041)    | -         |     6.51 | asap, chelleos, dangeR, Hatz, TjP    |
|           13 |     3115 | 2024-07-18 | DXA            | L   | 0.550      | -            | -                | -                | -         |   -11.11 | asap, chelleos, dangeR, Hatz, TjP    |
|           12 |     3230 | 2024-07-16 | Mindfreak      | W   | 0.537      | 0.333        | 0.009 (0.002)    | 0.240 (0.043)    | -         |     7.00 | asap, chelleos, dangeR, Hatz, TjP    |
|           11 |     3233 | 2024-07-16 | Mindfreak      | W   | 0.537      | 0.333        | 0.009 (0.002)    | 0.240 (0.043)    | -         |     7.33 | asap, chelleos, dangeR, Hatz, TjP    |
|           10 |     3741 | 2024-06-09 | FlyQuest       | L   | 0.290      | -            | -                | -                | -         |    -0.52 | asap, chelleos, dangeR, nettik, TjP  |
|            9 |     3849 | 2024-06-07 | FlyQuest       | W   | 0.277      | 0.333        | 0.266 (0.025)    | 0.464 (0.043)    | -         |     8.28 | asap, chelleos, dangeR, nettik, TjP  |
|            8 |     3923 | 2024-06-06 | Housebets      | W   | 0.270      | 0.333        | 0.006 (0.001)    | -                | -         |     3.72 | asap, chelleos, dangeR, nettik, TjP  |
|            7 |     4329 | 2024-05-22 | Vantage        | W   | 0.171      | -            | -                | -                | -         |     1.12 | asap, chelleos, dangeR, nettik, TjP  |
|            6 |     4333 | 2024-05-22 | Vantage        | W   | 0.170      | -            | -                | -                | -         |     1.13 | asap, chelleos, dangeR, nettik, TjP  |
|            5 |     4589 | 2024-05-15 | Canon Event    | W   | 0.124      | -            | -                | -                | -         |     0.76 | asap, chelleos, dangeR, nettik, TjP  |
|            4 |     4592 | 2024-05-15 | Canon Event    | W   | 0.124      | -            | -                | -                | -         |     0.76 | asap, chelleos, dangeR, nettik, TjP  |
|            3 |     4779 | 2024-05-08 | KZG            | W   | 0.077      | -            | -                | -                | -         |     1.00 | asap, chelleos, dangeR, nettik, TjP  |
|            2 |     4781 | 2024-05-08 | KZG            | W   | 0.077      | -            | -                | -                | -         |     1.00 | asap, chelleos, dangeR, nettik, TjP  |
|            1 |     5012 | 2024-04-27 | MIBR           | L   | 0.003      | -            | -                | -                | -         |    -0.00 | asap, chelleos, dangeR, nettik, TjP  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,690.28)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $600.00        | $600.00         |
| 2024-10-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-22 |      0.993 | $3,500.00      | $3,477.20       |
| 2024-06-09 |      0.290 | $2,000.00      | $580.73         |
| 2024-04-28 |      0.011 | $3,000.00      | $32.35          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
