### Roster Details<br />
Team Name: HereWeGoAgain<br />
Roster: flush, fraga, guizo, Ltm, trindade<br />
Global Rank: [318](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [87]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  514.8<br />
<br />
Final Rank Value (514.8) = Starting Rank Value (510.3) + Head To Head Adjustments (4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.3
- 400 + ( ( 0.056 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 510.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      908 | 2026-03-19 | R2              | L   | 1.000      | -            | -                | -                | -         |    -7.19 | flush, fraga, guizo, Ltm, phc       |
|            8 |      977 | 2026-03-17 | UNO MILLE       | L   | 1.000      | -            | -                | -                | -         |    -5.76 | flush, fraga, guizo, k9izer, Ltm    |
|            7 |     1109 | 2026-03-14 | FOLHA AMARELA   | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.356 (0.132)    | 0 (0.000) |    26.84 | flush, fraga, guizo, k9izer, Ltm    |
|            6 |     1157 | 2026-03-13 | Players         | L   | 1.000      | -            | -                | -                | -         |   -10.51 | flush, fraga, guizo, k9izer, Ltm    |
|            5 |     3368 | 2026-01-21 | GameHunters     | L   | 0.700      | -            | -                | -                | -         |    -3.33 | flush, fraga, Ltm, nordin, trindade |
|            4 |     3405 | 2026-01-19 | Satriales       | W   | 0.687      | 0.371        | 0.000 (0.000)    | 0.020 (0.005)    | 0 (0.000) |     7.61 | flush, fraga, Ltm, nordin, trindade |
|            3 |     3488 | 2026-01-17 | ELITES          | W   | 0.673      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.23 | flush, fraga, Ltm, nordin, trindade |
|            2 |     3574 | 2026-01-15 | paiN Academy    | L   | 0.661      | -            | -                | -                | -         |    -5.85 | flush, fraga, guizo, Ltm, trindade  |
|            1 |     3603 | 2026-01-14 | METANOIA Wolves | L   | 0.655      | -            | -                | -                | -         |    -4.53 | flush, fraga, Ltm, nordin, trindade |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
