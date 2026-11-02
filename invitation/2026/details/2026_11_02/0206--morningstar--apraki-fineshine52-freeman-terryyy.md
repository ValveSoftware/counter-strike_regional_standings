### Roster Details<br />
Team Name: Morningstar<br />
Roster: Apraki, fineshine52, Freeman, Terryyy<br />
Global Rank: [206](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [24]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  701.8<br />
<br />
Final Rank Value (701.8) = Starting Rank Value (694.1) + Head To Head Adjustments (7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 694.1
- 400 + ( ( 0.157 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 694.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      333 | 2026-10-21 | NEXVOID       | L   | 1.000      | -            | -                | -                | -         |    -1.68 | Apraki, fineshine52, Freeman, swiftsteel, Terryyy |
|            4 |      389 | 2026-10-20 | Alter Ego     | W   | 1.000      | 0.342        | 0.020 (0.007)    | 0.379 (0.130)    | 1 (1.000) |    27.45 | Apraki, fineshine52, Freeman, swiftsteel, Terryyy |
|            3 |      440 | 2026-10-19 | Lynn Vision   | L   | 1.000      | -            | -                | -                | -         |    -1.40 | Apraki, fineshine52, Freeman, swiftsteel, Terryyy |
|            2 |     1645 | 2026-09-24 | Vitalem Aerem | L   | 0.939      | -            | -                | -                | -         |   -12.27 | Apraki, fineshine52, Freeman, swiftsteel, Terryyy |
|            1 |     3066 | 2026-08-24 | Rare Atom     | L   | 0.732      | -            | -                | -                | -         |    -4.37 | Apraki, eleGant, fineshine52, Freeman, Terryyy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,270.99)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-24 |      1.000 | $700.00        | $700.00         |
| 2026-09-27 |      0.958 | $596.00        | $570.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
