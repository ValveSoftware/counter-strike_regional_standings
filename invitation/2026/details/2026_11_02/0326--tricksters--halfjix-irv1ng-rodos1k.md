### Roster Details<br />
Team Name: Tricksters<br />
Roster: halfjix, iRV1NG, Rodos1k<br />
Global Rank: [326](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [215]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  516.4<br />
<br />
Final Rank Value (516.4) = Starting Rank Value (520.7) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.7
- 400 + ( ( 0.064 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 520.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2835 | 2026-08-29 | DONSTU     | L   | 0.766      | -            | -                | -                | -         |    -5.92 | halfjix, iRV1NG, Leowaron, rmbooo, Rodos1k |
|            4 |     4248 | 2026-07-12 | mellren    | L   | 0.447      | -            | -                | -                | -         |    -2.11 | halfjix, iRV1NG, k3lpi, L1GHTN, Rodos1k    |
|            3 |     4269 | 2026-07-11 | The Boys   | W   | 0.441      | 0.278        | 0.000 (0.000)    | 0.014 (0.002)    | 0 (0.000) |     4.76 | halfjix, iRV1NG, k3lpi, L1GHTN, Rodos1k    |
|            2 |     5284 | 2026-05-25 | PsychoFace | L   | 0.128      | -            | -                | -                | -         |    -0.90 | adaRAN, boq, halfjix, iRV1NG, Rodos1k      |
|            1 |     5292 | 2026-05-25 | WW         | L   | 0.127      | -            | -                | -                | -         |    -0.14 | adaRAN, boq, halfjix, iRV1NG, Rodos1k      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($717.15)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-30 |      0.773 | $638.00        | $493.40         |
| 2026-07-12 |      0.448 | $500.00        | $223.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
