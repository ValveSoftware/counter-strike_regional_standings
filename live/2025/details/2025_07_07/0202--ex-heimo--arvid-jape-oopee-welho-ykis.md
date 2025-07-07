### Roster Details<br />
Team Name: ex-Heimo<br />
Roster: arvid, japE, oopee, Welho, ykis<br />
Global Rank: [202](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [105]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  585.3<br />
<br />
Final Rank Value (585.3) = Starting Rank Value (590.1) + Head To Head Adjustments (-4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.222[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.102<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 590.1
- 400 + ( ( 0.102 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 590.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2534 | 2025-03-10 | PCIFIC         | L   | 0.406      | -            | -                | -                | -         |    -8.39 | arvid, japE, oopee, Welho, ykis |
|            4 |     2631 | 2025-03-08 | HEROIC Academy | W   | 0.394      | 0.372        | 0.002 (0.000)    | 0.197 (0.029)    | 0 (0.000) |     8.22 | arvid, japE, oopee, Welho, ykis |
|            3 |     2778 | 2025-03-06 | QMISTRY        | L   | 0.380      | -            | -                | -                | -         |    -5.41 | arvid, japE, oopee, Welho, ykis |
|            2 |     2843 | 2025-03-04 | WOPA           | W   | 0.366      | 0.372        | 0.000 (0.000)    | 0.057 (0.008)    | 0 (0.000) |     3.60 | arvid, japE, oopee, Welho, ykis |
|            1 |     3144 | 2025-02-21 | JANO           | L   | 0.294      | -            | -                | -                | -         |    -2.83 | arvid, japE, oopee, Welho, ykis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($154.65)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.300 | $516.00        | $154.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
