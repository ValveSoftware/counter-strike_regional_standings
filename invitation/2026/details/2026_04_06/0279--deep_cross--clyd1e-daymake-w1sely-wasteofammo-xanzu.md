### Roster Details<br />
Team Name: Deep Cross<br />
Roster: clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu<br />
Global Rank: [279](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [32]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  599.6<br />
<br />
Final Rank Value (599.6) = Starting Rank Value (621.4) + Head To Head Adjustments (-21.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.144[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.041[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.4
- 400 + ( ( 0.113 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 621.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2356 | 2026-02-18 | Arise          | L   | 0.886      | -            | -                | -                | -         |   -12.59 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            4 |     2419 | 2026-02-17 | BORING PLAYERS | L   | 0.880      | -            | -                | -                | -         |   -11.16 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            3 |     4725 | 2025-11-09 | Unitronics     | W   | 0.211      | 0.433        | 0.000 (0.000)    | 0.006 (0.001)    | 1 (0.211) |     2.22 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            2 |     4838 | 2025-11-07 | Wicked         | W   | 0.200      | 0.433        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.200) |     2.12 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            1 |     4886 | 2025-11-07 | Mousquetaires  | L   | 0.198      | -            | -                | -                | -         |    -2.40 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($850.70)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.213 | $4,000.00      | $850.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
