### Roster Details<br />
Team Name: Wave<br />
Roster: Belof, hayanh, Katalic, miksozzz, sheezy<br />
Global Rank: [270](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [174]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  631.0<br />
<br />
Final Rank Value (631.0) = Starting Rank Value (643.9) + Head To Head Adjustments (-12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.225[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.124[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.9
- 400 + ( ( 0.129 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 643.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3421 | 2026-03-23 | OlyBet      | L   | 0.501      | -            | -                | -                | -         |    -6.16 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            7 |     3426 | 2026-03-23 | MTX         | L   | 0.501      | -            | -                | -                | -         |    -8.95 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            6 |     3431 | 2026-03-23 | ASTRAL      | L   | 0.501      | -            | -                | -                | -         |    -1.42 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            5 |     4188 | 2026-03-08 | Lilmix      | L   | 0.400      | -            | -                | -                | -         |    -5.30 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            4 |     4204 | 2026-03-08 | BIG Academy | W   | 0.400      | 0.303        | 0.000 (0.000)    | 0.251 (0.030)    | 1 (0.400) |     6.56 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            3 |     4216 | 2026-03-08 | LEO         | W   | 0.399      | 0.303        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.399) |     4.04 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            2 |     4241 | 2026-03-07 | megoshort   | L   | 0.394      | -            | -                | -                | -         |    -4.19 | Belof, hayanh, Katalic, miksozzz, sheezy |
|            1 |     4256 | 2026-03-07 | Z7          | W   | 0.392      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.392) |     2.50 | Belof, hayanh, Katalic, miksozzz, sheezy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($200.88)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-08 |      0.402 | $500.00        | $200.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
