### Roster Details<br />
Team Name: PCIFIC<br />
Roster: eNs, jresy, lugseN, maxy0y0, scolleN<br />
Global Rank: [119](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [81]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  915.5<br />
<br />
Final Rank Value (915.5) = Starting Rank Value (877.7) + Head To Head Adjustments (37.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.412[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 877.7
- 400 + ( ( 0.253 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 877.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      108 | 2026-06-26 | CYBERSHOKE Prospects | L   | 1.000      | -            | -                | -                | -         |    -8.72 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            6 |      111 | 2026-06-26 | Rune Eaters          | W   | 1.000      | 0.324        | 0.010 (0.003)    | 0.680 (0.220)    | 1 (1.000) |    15.53 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            5 |      130 | 2026-06-25 | CYBERSHOKE Prospects | W   | 1.000      | 0.324        | 0.013 (0.004)    | 0.663 (0.215)    | 1 (1.000) |    22.91 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            4 |      138 | 2026-06-25 | DEPO                 | W   | 1.000      | 0.324        | 0.007 (0.002)    | 0.269 (0.087)    | 1 (1.000) |    19.63 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            3 |      714 | 2026-05-29 | Rune Eaters          | L   | 0.947      | -            | -                | -                | -         |   -14.54 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            2 |      726 | 2026-05-29 | DNK                  | W   | 0.946      | 0.354        | 0.001 (0.000)    | 0.025 (0.008)    | 1 (0.946) |     5.43 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            1 |      734 | 2026-05-29 | HOTU                 | L   | 0.945      | -            | -                | -                | -         |    -2.47 | eNs, jresy, lugseN, maxy0y0, scolleN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,524.89)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-26 |      1.000 | $2,045.00      | $2,045.00       |
| 2026-05-31 |      0.960 | $500.00        | $479.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
