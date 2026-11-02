### Roster Details<br />
Team Name: Off Chops<br />
Roster: damyo, dexter, Gratisfaction, Liazz, viridian<br />
Global Rank: [128](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [15]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  935.5<br />
<br />
Final Rank Value (935.5) = Starting Rank Value (897.8) + Head To Head Adjustments (37.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.400[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 897.8
- 400 + ( ( 0.266 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 897.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      155 | 2026-10-27 | NEXVOID     | L   | 1.000      | -            | -                | -                | -         |    -6.51 | damyo, dexter, Gratisfaction, Liazz, viridian |
|           18 |      199 | 2026-10-26 | Alter Ego   | L   | 1.000      | -            | -                | -                | -         |   -11.60 | damyo, dexter, Gratisfaction, Liazz, viridian |
|           17 |      200 | 2026-10-25 | Ground Zero | W   | 1.000      | 0.393        | 0.009 (0.004)    | 0.234 (0.092)    | 1 (1.000) |    14.81 | damyo, dexter, Gratisfaction, Liazz, viridian |
|           16 |      527 | 2026-10-17 | NEXVOID     | L   | 1.000      | -            | -                | -                | -         |    -5.93 | damyo, dexter, Gratisfaction, Liazz, viridian |
|           15 |      568 | 2026-10-17 | Rooster     | W   | 1.000      | 0.350        | 0.006 (0.002)    | 0.261 (0.091)    | 1 (1.000) |    11.58 | damyo, dexter, Gratisfaction, Liazz, viridian |
|           14 |      570 | 2026-10-16 | NEXVOID     | L   | 1.000      | -            | -                | -                | -         |    -5.63 | damyo, dexter, Gratisfaction, Liazz, viridian |
|           13 |      612 | 2026-10-16 | Abyssal     | W   | 1.000      | 0.350        | 0.013 (0.004)    | 0.307 (0.108)    | 1 (1.000) |    18.23 | damyo, dexter, Gratisfaction, Liazz, viridian |
|           12 |      618 | 2026-10-16 | Ground Zero | W   | 1.000      | 0.350        | 0.009 (0.003)    | 0.234 (0.082)    | 1 (1.000) |    17.02 | damyo, dexter, Gratisfaction, Liazz, viridian |
|           11 |      621 | 2026-10-15 | FlyQuest    | L   | 1.000      | -            | -                | -                | -         |    -3.25 | damyo, dexter, Gratisfaction, Liazz, viridian |
|           10 |      847 | 2026-10-09 | KZG         | L   | 1.000      | -            | -                | -                | -         |   -23.60 | dexter, Gratisfaction, Liazz, TjP, viridian   |
|            9 |      849 | 2026-10-09 | BGNS Orange | L   | 1.000      | -            | -                | -                | -         |   -28.57 | dexter, Gratisfaction, Liazz, TjP, viridian   |
|            8 |     1354 | 2026-09-29 | FlyQuest    | L   | 0.972      | -            | -                | -                | -         |    -4.61 | dexter, Gratisfaction, Liazz, TjP, viridian   |
|            7 |     1382 | 2026-09-28 | Ground Zero | W   | 0.965      | 0.278        | 0.009 (0.002)    | 0.234 (0.063)    | 0 (0.000) |    15.68 | dexter, Gratisfaction, Liazz, TjP, viridian   |
|            6 |     1435 | 2026-09-27 | FlyQuest    | L   | 0.958      | -            | -                | -                | -         |    -4.40 | dexter, Gratisfaction, Liazz, TjP, viridian   |
|            5 |     1583 | 2026-09-25 | Ground Zero | W   | 0.945      | 0.278        | 0.009 (0.002)    | 0.234 (0.061)    | 0 (0.000) |    15.40 | dexter, Gratisfaction, Liazz, TjP, viridian   |
|            4 |     1727 | 2026-09-23 | ex-Arcade   | W   | 0.932      | 0.278        | 0.000 (0.000)    | 0.168 (0.043)    | 0 (0.000) |     3.29 | dexter, Gratisfaction, Liazz, TjP, viridian   |
|            3 |     2696 | 2026-09-01 | Ground Zero | W   | 0.785      | 0.278        | 0.009 (0.002)    | 0.234 (0.051)    | 0 (0.000) |    13.40 | asap, Gratisfaction, Liazz, TjP, viridian     |
|            2 |     2798 | 2026-08-30 | Ground Zero | W   | 0.772      | 0.278        | 0.009 (0.002)    | 0.234 (0.050)    | 0 (0.000) |    14.03 | asap, Gratisfaction, Liazz, TjP, viridian     |
|            1 |     2900 | 2026-08-28 | Mindfreak   | W   | 0.758      | 0.278        | 0.001 (0.000)    | 0.186 (0.039)    | 0 (0.000) |     8.32 | asap, Gratisfaction, Liazz, TjP, viridian     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,232.97)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-18 |      1.000 | $2,084.00      | $2,084.00       |
| 2026-09-29 |      0.972 | $1,000.00      | $971.58         |
| 2026-09-01 |      0.785 | $1,500.00      | $1,177.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
