### Roster Details<br />
Team Name: Nas<br />
Roster: Biuckmt, Corazz, Mirorr, Mr66, S1kura<br />
Global Rank: [314](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [42]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  527.3<br />
<br />
Final Rank Value (527.3) = Starting Rank Value (531.5) + Head To Head Adjustments (-4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.5
- 400 + ( ( 0.071 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 531.5


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
|            6 |       43 | 2026-05-01 | Wings of Freedom  | L   | 1.000      | -            | -                | -                | -         |   -12.60 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            5 |       71 | 2026-05-01 | Legion            | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.214 (0.031)    | 1 (1.000) |    21.36 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            4 |      112 | 2026-04-30 | 5star             | L   | 1.000      | -            | -                | -                | -         |    -1.21 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            3 |     1461 | 2026-03-29 | UR                | L   | 0.958      | -            | -                | -                | -         |   -19.45 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            2 |     1463 | 2026-03-28 | Walk The Talk     | W   | 0.957      | 0.320        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.96 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |
|            1 |     1541 | 2026-03-28 | Chinggis Warriors | L   | 0.951      | -            | -                | -                | -         |    -1.21 | Biuckmt, Corazz, Mirorr, Mr66, S1kura |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
