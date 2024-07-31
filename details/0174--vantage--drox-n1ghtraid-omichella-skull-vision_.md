### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, N1ghtraid, Omichella, SkulL, vision <br />
Global Rank: [174](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [16]( ../standings_asia.md)<br />
<br />
Final Rank Value:  649.7<br />
<br />
Final Rank Value (649.7) = Starting Rank Value (658.5) + Head To Head Adjustments (-8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.5
- 400 + ( ( 0.125 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 658.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     1697 | 2024-05-22 | Rooster            | L   | 0.730      | -            | -                | -                | -         |    -6.23 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           26 |     1701 | 2024-05-22 | Rooster            | L   | 0.730      | -            | -                | -                | -         |    -6.56 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           25 |     2480 | 2024-04-22 | Mindfreak          | L   | 0.531      | -            | -                | -                | -         |    -7.52 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           24 |     2483 | 2024-04-22 | Mindfreak          | L   | 0.530      | -            | -                | -                | -         |    -7.87 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           23 |     2671 | 2024-04-17 | Arcade             | L   | 0.497      | -            | -                | -                | -         |    -8.48 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           22 |     2833 | 2024-04-10 | Arcade             | W   | 0.450      | 0.333        | 0.003 (0.000)    | 0.139 (0.021)    | 0 (0.000) |     6.63 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           21 |     2840 | 2024-04-10 | Arcade             | W   | 0.450      | 0.333        | 0.003 (0.000)    | 0.139 (0.021)    | 0 (0.000) |     6.89 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           20 |     3064 | 2024-04-03 | KZG                | W   | 0.404      | 0.333        | 0.006 (0.001)    | 0.113 (0.015)    | 0 (0.000) |     6.66 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           19 |     3065 | 2024-04-03 | KZG                | W   | 0.404      | 0.333        | 0.006 (0.001)    | 0.113 (0.015)    | 0 (0.000) |     6.90 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           18 |     3192 | 2024-03-27 | Canon Event        | W   | 0.357      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.34 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           17 |     3196 | 2024-03-27 | Canon Event        | W   | 0.357      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     3.43 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           16 |     3462 | 2024-03-13 | DXA                | L   | 0.264      | -            | -                | -                | -         |    -3.83 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           15 |     3467 | 2024-03-13 | DXA                | W   | 0.264      | 0.333        | 0.002 (0.000)    | 0.228 (0.020)    | 0 (0.000) |     4.56 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           14 |     3639 | 2024-03-06 | Bad News Kangaroos | L   | 0.217      | -            | -                | -                | -         |    -2.33 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           13 |     3641 | 2024-03-06 | Bad News Kangaroos | L   | 0.217      | -            | -                | -                | -         |    -2.36 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           12 |     3810 | 2024-02-27 | RKON               | W   | 0.164      | 0.333        | -                | 0.035 (0.002)    | 0 (0.000) |     1.59 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           11 |     3813 | 2024-02-27 | RKON               | L   | 0.164      | -            | -                | -                | -         |    -3.60 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           10 |     3914 | 2024-02-22 | Bad News Kangaroos | L   | 0.130      | -            | -                | -                | -         |    -1.44 | Drox, Omichella, SkulL, viridian, vision   |
|            9 |     3915 | 2024-02-21 | Rooster            | L   | 0.130      | -            | -                | -                | -         |    -1.36 | Drox, Omichella, SkulL, viridian, vision   |
|            8 |     3949 | 2024-02-21 | Arcade             | W   | 0.123      | 0.143        | 0.003 (0.000)    | 0.139 (0.002)    | 0 (0.000) |     2.03 | Drox, Omichella, SkulL, viridian, vision   |
|            7 |     3969 | 2024-02-20 | Mindfreak          | W   | 0.117      | 0.143        | 0.004 (0.000)    | 0.227 (0.004)    | 0 (0.000) |     2.01 | Drox, Omichella, SkulL, viridian, vision   |
|            6 |     3971 | 2024-02-20 | Blitz              | W   | 0.117      | -            | -                | -                | -         |     0.71 | Drox, Omichella, SkulL, viridian, vision   |
|            5 |     4014 | 2024-02-18 | Mindfreak          | L   | 0.104      | -            | -                | -                | -         |    -1.51 | Drox, Omichella, SkulL, viridian, vision   |
|            4 |     4015 | 2024-02-18 | LE-LUX             | W   | 0.104      | -            | -                | -                | -         |     0.62 | Drox, Omichella, SkulL, viridian, vision   |
|            3 |     4074 | 2024-02-16 | sunday school      | L   | 0.090      | -            | -                | -                | -         |    -1.50 | damyo, Omichella, SkulL, viridian, vision  |
|            2 |     4095 | 2024-02-15 | DXA                | W   | 0.084      | 0.143        | 0.002 (0.000)    | 0.228 (0.003)    | -         |     1.46 | damyo, Omichella, SkulL, viridian, vision  |
|            1 |     4100 | 2024-02-14 | KZG                | L   | 0.083      | -            | -                | -                | -         |    -1.10 | damyo, Omichella, SkulL, viridian, vision  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($680.08)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
