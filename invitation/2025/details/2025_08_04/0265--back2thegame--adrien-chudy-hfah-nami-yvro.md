### Roster Details<br />
Team Name: Back2TheGame<br />
Roster: AdrieN, chudy, hfah, Nami, yvro<br />
Global Rank: [265](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [139]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  475.4<br />
<br />
Final Rank Value (475.4) = Starting Rank Value (497.8) + Head To Head Adjustments (-22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.8
- 400 + ( ( 0.052 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 497.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      171 | 2025-07-20 | xdasdf         | L   | 1.000      | -            | -                | -                | -         |   -19.02 | AdrieN, chudy, hfah, Nami, yvro         |
|            6 |      472 | 2025-07-08 | NOVAQ          | L   | 1.000      | -            | -                | -                | -         |   -11.31 | AdrieN, chudy, darchevile, Melavi, Nami |
|            5 |      495 | 2025-07-05 | Fisher College | W   | 1.000      | 0.486        | 0.001 (0.001)    | 0.236 (0.115)    | 0 (0.000) |    20.27 | AdrieN, chudy, darchevile, Melavi, Nami |
|            4 |      502 | 2025-07-04 | QMISTRY        | L   | 0.992      | -            | -                | -                | -         |    -9.07 | AdrieN, chudy, darchevile, Melavi, Nami |
|            3 |      523 | 2025-07-01 | Marius         | L   | 0.973      | -            | -                | -                | -         |    -5.69 | AdrieN, chudy, darchevile, Melavi, Nami |
|            2 |     3674 | 2025-02-21 | Tricked        | L   | 0.107      | -            | -                | -                | -         |    -0.30 | AdrieN, chudy, darchevile, mwlky, Nami  |
|            1 |     3683 | 2025-02-21 | 1win           | W   | 0.107      | 0.143        | 0.007 (0.000)    | 0.301 (0.005)    | 0 (0.000) |     2.76 | AdrieN, chudy, darchevile, mwlky, Nami  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
