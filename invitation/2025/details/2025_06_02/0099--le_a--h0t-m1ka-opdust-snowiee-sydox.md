### Roster Details<br />
Team Name: Leça<br />
Roster: h0t, M1KA, opdust, snowiee, SYDOX<br />
Global Rank: [99](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [62]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  802.9<br />
<br />
Final Rank Value (802.9) = Starting Rank Value (791.4) + Head To Head Adjustments (11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.281[<sup>2</sup>](#table1)

The average of these factors is 0.213<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 791.4
- 400 + ( ( 0.213 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 791.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      357 | 2025-05-11 | Rhyno        | L   | 1.000      | -            | -                | -                | -         |   -17.77 | h0t, M1KA, opdust, snowiee, SYDOX |
|            4 |      390 | 2025-05-10 | Iberian Soul | W   | 1.000      | 0.316        | 0.019 (0.006)    | 0.624 (0.197)    | 1 (1.000) |    21.48 | h0t, M1KA, opdust, snowiee, SYDOX |
|            3 |      410 | 2025-05-09 | The Animals  | W   | 1.000      | 0.316        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     5.01 | h0t, M1KA, opdust, snowiee, SYDOX |
|            2 |     1916 | 2025-03-16 | Iberian Soul | L   | 0.685      | -            | -                | -                | -         |    -6.75 | h0t, M1KA, opdust, snowiee, ZPX   |
|            1 |     1934 | 2025-03-15 | Rhyno        | W   | 0.678      | 0.306        | 0.007 (0.001)    | 0.149 (0.031)    | 1 (0.678) |     9.44 | h0t, M1KA, opdust, snowiee, ZPX   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,439.19)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      1.000 | $1,697.00      | $1,697.00       |
| 2025-03-16 |      0.685 | $1,084.00      | $742.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
