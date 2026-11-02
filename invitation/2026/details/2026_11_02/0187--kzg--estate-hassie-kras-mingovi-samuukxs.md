### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, Hassie, Kras, Mingovi, Samuukxs<br />
Global Rank: [187](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [22]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  735.5<br />
<br />
Final Rank Value (735.5) = Starting Rank Value (718.4) + Head To Head Adjustments (17.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.4
- 400 + ( ( 0.170 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 718.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      787 | 2026-10-10 | Abyssal     | L   | 1.000      | -            | -                | -                | -         |    -6.70 | Estate, Hassie, Kras, Mingovi, Samuukxs |
|            4 |      791 | 2026-10-10 | FlyQuest    | L   | 1.000      | -            | -                | -                | -         |    -1.49 | Estate, Hassie, Kras, Mingovi, Samuukxs |
|            3 |      827 | 2026-10-10 | BGNS Orange | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.032 (0.010)    | 1 (1.000) |     8.01 | Estate, Hassie, Kras, Mingovi, Samuukxs |
|            2 |      847 | 2026-10-09 | Off Chops   | W   | 1.000      | 0.318        | 0.008 (0.002)    | 0.148 (0.047)    | 1 (1.000) |    23.60 | Estate, Hassie, Kras, Mingovi, Samuukxs |
|            1 |      848 | 2026-10-09 | Ground Zero | L   | 1.000      | -            | -                | -                | -         |    -6.33 | Estate, Hassie, Kras, Mingovi, Samuukxs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($711.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-11 |      1.000 | $711.00        | $711.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
