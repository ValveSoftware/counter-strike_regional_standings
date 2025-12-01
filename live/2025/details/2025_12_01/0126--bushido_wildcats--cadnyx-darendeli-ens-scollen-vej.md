### Roster Details<br />
Team Name: Bushido Wildcats<br />
Roster: cadnyx, Darendeli, eNs, scolleN, Vej<br />
Global Rank: [126](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [86]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  831.4<br />
<br />
Final Rank Value (831.4) = Starting Rank Value (797.6) + Head To Head Adjustments (33.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.202[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 797.6
- 400 + ( ( 0.209 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 797.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       76 | 2025-11-25 | CYBERSHOKE | L   | 1.000      | -            | -                | -                | -         |    -5.20 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            5 |       87 | 2025-11-25 | RUBY       | W   | 1.000      | 0.371        | 0.049 (0.018)    | 1.000 (0.371)    | 1 (1.000) |    22.89 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            4 |      105 | 2025-11-24 | GUN5       | L   | 1.000      | -            | -                | -                | -         |    -3.64 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            3 |      113 | 2025-11-24 | RUBY       | W   | 1.000      | 0.371        | 0.049 (0.018)    | 1.000 (0.371)    | 1 (1.000) |    24.31 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            2 |      561 | 2025-11-07 | Fire Flux  | L   | 1.000      | -            | -                | -                | -         |   -10.75 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            1 |      810 | 2025-11-01 | MANA       | W   | 0.999      | 0.278        | 0.000 (0.000)    | 0.108 (0.030)    | 0 (0.000) |     6.27 | cadnyx, Darendeli, eNs, scolleN, Vej |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,000.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-26 |      1.000 | $1,000.00      | $1,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
