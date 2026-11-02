### Roster Details<br />
Team Name: Dripmen<br />
Roster: Ariant0, dobbo, Frazehh, Prime, robiin<br />
Global Rank: [265](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [179]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  610.5<br />
<br />
Final Rank Value (610.5) = Starting Rank Value (605.4) + Head To Head Adjustments (5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 605.4
- 400 + ( ( 0.110 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 605.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4726 | 2026-06-13 | The Last Resort  | L   | 0.253      | -            | -                | -                | -         |    -0.36 | Ariant0, cryths, dobbo, Frazehh, Prime   |
|            6 |     5116 | 2026-05-29 | Ryvex            | W   | 0.154      | 0.265        | 0.005 (0.000)    | 0.257 (0.011)    | 0 (0.000) |     3.64 | Ariant0, dobbo, Frazehh, Prime, robiin   |
|            5 |     5195 | 2026-05-28 | Vexar            | L   | 0.145      | -            | -                | -                | -         |    -1.45 | Ariant0, dobbo, Frazehh, Prime, robiin   |
|            4 |     5222 | 2026-05-27 | Bushido Wildcats | W   | 0.140      | 0.303        | 0.020 (0.001)    | 1.000 (0.042)    | 0 (0.000) |     3.92 | Ariant0, dobbo, Frazehh, Prime, robiin   |
|            3 |     5254 | 2026-05-26 | The Last Resort  | L   | 0.134      | -            | -                | -                | -         |    -0.18 | Ariant0, dobbo, Frazehh, Prime, robiin   |
|            2 |     5305 | 2026-05-25 | Enjoy            | L   | 0.125      | -            | -                | -                | -         |    -1.36 | Ariant0, Frazehh, Prime, robiin, Tadpole |
|            1 |     5345 | 2026-05-24 | Subtop De France | W   | 0.119      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.90 | Ariant0, Frazehh, Prime, robiin, Tadpole |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($274.54)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.253 | $1,083.00      | $274.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
