### Roster Details<br />
Team Name: DETONATE<br />
Roster: carN, chante, duhpe, Feral, tatm<br />
Global Rank: [263](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [64]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  641.9<br />
<br />
Final Rank Value (641.9) = Starting Rank Value (643.7) + Head To Head Adjustments (-1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.7
- 400 + ( ( 0.129 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 643.7


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
|            5 |      200 | 2026-06-19 | Villainous     | L   | 1.000      | -            | -                | -                | -         |   -14.21 | carN, chante, duhpe, Feral, tatm |
|            4 |      294 | 2026-06-13 | Iowa Stormboar | L   | 1.000      | -            | -                | -                | -         |   -10.20 | carN, chante, duhpe, Feral, tatm |
|            3 |      298 | 2026-06-13 | Wanted Goons   | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.172 (0.052)    | 0 (0.000) |    17.41 | carN, chante, duhpe, Feral, tatm |
|            2 |      343 | 2026-06-12 | Festina Lente  | L   | 1.000      | -            | -                | -                | -         |   -15.87 | carN, chante, duhpe, Feral, tatm |
|            1 |      378 | 2026-06-11 | Iowa Stormboar | W   | 1.000      | 0.303        | 0.012 (0.004)    | 0.432 (0.131)    | 0 (0.000) |    21.01 | carN, chante, duhpe, Feral, tatm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,200.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-06-14 |      1.000 | $200.00        | $200.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
