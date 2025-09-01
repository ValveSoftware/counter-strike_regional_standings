### Roster Details<br />
Team Name: adalYamigos<br />
Roster: ckzao, delboNi, f4stzin, SHOOWTiME<br />
Global Rank: [204](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [64]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  593.8<br />
<br />
Final Rank Value (593.8) = Starting Rank Value (593.1) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.208[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.101<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 593.1
- 400 + ( ( 0.101 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 593.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3700 | 2025-03-11 | ShindeN         | L   | 0.042      | -            | -                | -                | -         |    -0.35 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME  |
|            4 |     3739 | 2025-03-10 | Sharks          | W   | 0.034      | 0.371        | 0.056 (0.001)    | 0.597 (0.008)    | 0 (0.000) |     0.98 | ckzao, delboNi, f4stzin, fREQ, SHOOWTiME |
|            3 |     3780 | 2025-03-09 | Elevate         | W   | 0.028      | 0.371        | 0.000 (0.000)    | 0.197 (0.002)    | 0 (0.000) |     0.36 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME  |
|            2 |     3865 | 2025-03-08 | ODDIK           | L   | 0.020      | -            | -                | -                | -         |    -0.04 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME  |
|            1 |     3926 | 2025-03-07 | LaChampionsLiga | L   | 0.014      | -            | -                | -                | -         |    -0.28 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64.67)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-11 |      0.043 | $1,500.00      | $64.67          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
