### Roster Details<br />
Team Name: Nas<br />
Roster: Biuckmt, Corazz, Mirorr, Mr66, S1kura<br />
Global Rank: [309](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [38]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  535.5<br />
<br />
Final Rank Value (535.5) = Starting Rank Value (538.0) + Head To Head Adjustments (-2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.102[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 538.0
- 400 + ( ( 0.072 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 538.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      963 | 2026-05-01 | Wings of Freedom  | L   | 0.997      | -            | -                | -                | -         |   -12.38 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            5 |     1002 | 2026-05-01 | Legion            | W   | 0.993      | 0.471        | 0.001 (0.000)    | 0.145 (0.068)    | 1 (0.993) |    20.66 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            4 |     1057 | 2026-04-30 | 5star             | L   | 0.984      | -            | -                | -                | -         |    -1.02 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            3 |     2447 | 2026-03-29 | UR                | L   | 0.771      | -            | -                | -                | -         |   -16.09 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            2 |     2449 | 2026-03-28 | Walk The Talk     | W   | 0.770      | 0.320        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.19 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            1 |     2527 | 2026-03-28 | Chinggis Warriors | L   | 0.765      | -            | -                | -                | -         |    -0.89 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
