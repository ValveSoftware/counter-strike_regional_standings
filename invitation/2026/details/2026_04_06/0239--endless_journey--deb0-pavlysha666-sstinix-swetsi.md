### Roster Details<br />
Team Name: Endless Journey<br />
Roster: deb0, pavlysha666, sstiNiX, swetsi<br />
Global Rank: [239](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [154]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  671.0<br />
<br />
Final Rank Value (671.0) = Starting Rank Value (665.5) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 665.5
- 400 + ( ( 0.136 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 665.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      556 | 2026-03-25 | WW           | L   | 1.000      | -            | -                | -                | -         |    -1.19 | deb0, pavlysha666, sstiNiX, swetsi, xonn1k   |
|            5 |      565 | 2026-03-25 | Zorka Future | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.63 | deb0, pavlysha666, sstiNiX, swetsi, xonn1k   |
|            4 |      766 | 2026-03-22 | BET-M        | L   | 1.000      | -            | -                | -                | -         |    -0.78 | fearfox, KENSI, pavlysha666, sstiNiX, swetsi |
|            3 |     1081 | 2026-03-15 | Young Ninjas | L   | 1.000      | -            | -                | -                | -         |    -7.92 | deb0, fearfox, pavlysha666, sstiNiX, swetsi  |
|            2 |     1121 | 2026-03-14 | DONSTU       | L   | 1.000      | -            | -                | -                | -         |   -13.11 | deb0, fearfox, pavlysha666, sstiNiX, swetsi  |
|            1 |     1211 | 2026-03-12 | Young Ninjas | W   | 1.000      | 0.278        | 0.004 (0.001)    | 0.208 (0.058)    | 0 (0.000) |    22.89 | deb0, fearfox, gxx-, pavlysha666, sstiNiX    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,661.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-22 |      1.000 | $4,161.00      | $4,161.00       |
| 2026-03-15 |      1.000 | $500.00        | $500.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
