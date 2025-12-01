### Roster Details<br />
Team Name: paiN Academy<br />
Roster: futoi, Markz, Tatu, tsug<br />
Global Rank: [258](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [75]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  519.6<br />
<br />
Final Rank Value (519.6) = Starting Rank Value (515.4) + Head To Head Adjustments (4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.4
- 400 + ( ( 0.061 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 515.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      456 | 2025-11-09 | Crashers       | L   | 1.000      | -            | -                | -                | -         |   -12.60 | futoi, Markz, Rkzinho, Tatu, tsug |
|            4 |      513 | 2025-11-08 | LP             | L   | 1.000      | -            | -                | -                | -         |    -5.88 | futoi, Markz, Rkzinho, Tatu, tsug |
|            3 |      679 | 2025-11-05 | FURIA fe       | W   | 1.000      | 0.371        | 0.013 (0.005)    | 0.304 (0.113)    | 0 (0.000) |    26.61 | futoi, Markz, Rkzinho, Tatu, tsug |
|            2 |      737 | 2025-11-03 | Dusty Roots    | L   | 1.000      | -            | -                | -                | -         |    -2.88 | futoi, Markz, Rkzinho, Tatu, tsug |
|            1 |     3801 | 2025-07-27 | Bounty Hunters | L   | 0.354      | -            | -                | -                | -         |    -1.11 | deemO, futoi, Markz, Tatu, tsug   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
