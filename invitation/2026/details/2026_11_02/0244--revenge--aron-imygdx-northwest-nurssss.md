### Roster Details<br />
Team Name: Revenge<br />
Roster: aRon, imyGDx, Northwest, nursSSS<br />
Global Rank: [244](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [27]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  646.4<br />
<br />
Final Rank Value (646.4) = Starting Rank Value (636.7) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.234[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 636.7
- 400 + ( ( 0.126 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 636.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2276 | 2026-09-10 | DEPO     | L   | 0.846      | -            | -                | -                | -         |    -3.31 | aRon, Hezza, imyGDx, Northwest, nursSSS   |
|            6 |     2290 | 2026-09-10 | Legion   | W   | 0.846      | 0.624        | 0.001 (0.001)    | 0.085 (0.045)    | 0 (0.000) |    12.68 | aRon, Hezza, imyGDx, Northwest, nursSSS   |
|            5 |     2338 | 2026-09-09 | DEPO     | L   | 0.840      | -            | -                | -                | -         |    -3.19 | aRon, Hezza, imyGDx, Northwest, nursSSS   |
|            4 |     2347 | 2026-09-09 | Legion   | W   | 0.839      | 0.624        | 0.001 (0.001)    | 0.085 (0.045)    | 0 (0.000) |    13.22 | aRon, Hezza, imyGDx, Northwest, nursSSS   |
|            3 |     3689 | 2026-08-01 | THE UNIT | L   | 0.580      | -            | -                | -                | -         |    -7.87 | aRon, imyGDx, Lunatik, Northwest, nursSSS |
|            2 |     3693 | 2026-08-01 | ZWAW     | W   | 0.579      | 0.342        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.579) |     6.17 | aRon, imyGDx, Lunatik, Northwest, nursSSS |
|            1 |     3707 | 2026-08-01 | THE UNIT | L   | 0.578      | -            | -                | -                | -         |    -8.06 | aRon, imyGDx, Lunatik, Northwest, nursSSS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($292.95)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      0.586 | $500.00        | $292.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
