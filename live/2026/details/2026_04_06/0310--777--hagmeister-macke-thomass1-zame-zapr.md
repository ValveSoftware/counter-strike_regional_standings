### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, macke, thomass1, zame, ZapR<br />
Global Rank: [310](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [191]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  529.1<br />
<br />
Final Rank Value (529.1) = Starting Rank Value (525.0) + Head To Head Adjustments (4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.040[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.0
- 400 + ( ( 0.064 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 525.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3047 | 2026-01-31 | TNC                | L   | 0.767      | -            | -                | -                | -         |    -1.54 | macke, Mann3n, thomass1, zame, ZapR      |
|           13 |     3201 | 2026-01-25 | Acend              | L   | 0.726      | -            | -                | -                | -         |    -0.53 | Hagmeister, Mann3n, thomass1, zame, ZapR |
|           12 |     3561 | 2026-01-16 | Universe           | W   | 0.665      | 0.396        | 0.001 (0.000)    | 0.006 (0.002)    | 0 (0.000) |    12.51 | Hagmeister, macke, thomass1, zame, ZapR  |
|           11 |     3616 | 2026-01-14 | BASEMENT BOYS      | L   | 0.652      | -            | -                | -                | -         |    -3.35 | akez, Hagmeister, macke, zame, ZapR      |
|           10 |     3619 | 2026-01-13 | The Glecs          | W   | 0.648      | 0.384        | 0.000 (0.000)    | 0.007 (0.002)    | 0 (0.000) |     9.50 | Hagmeister, macke, thomass1, zame, ZapR  |
|            9 |     3634 | 2026-01-12 | BASEMENT BOYS      | L   | 0.641      | -            | -                | -                | -         |    -3.23 | H4RR3, Hagmeister, thomass1, zame, ZapR  |
|            8 |     3648 | 2026-01-11 | ex-Fingers Crossed | L   | 0.633      | -            | -                | -                | -         |    -2.63 | Hagmeister, macke, thomass1, zame, ZapR  |
|            7 |     3663 | 2026-01-10 | ex-FUT Academy     | L   | 0.625      | -            | -                | -                | -         |    -7.71 | macke, Tapewaare, thomass1, zame, ZapR   |
|            6 |     3677 | 2026-01-06 | japczany           | L   | 0.599      | -            | -                | -                | -         |    -6.58 | macke, Tapewaare, thomass1, zame, ZapR   |
|            5 |     4820 | 2025-11-07 | Lilmix             | L   | 0.200      | -            | -                | -                | -         |    -0.46 | Brave, Hagmeister, thomass1, zame, ZapR  |
|            4 |     4836 | 2025-11-07 | Sashi              | L   | 0.200      | -            | -                | -                | -         |    -0.07 | Brave, Hagmeister, thomass1, zame, ZapR  |
|            3 |     4850 | 2025-11-07 | BetBoom            | L   | 0.199      | -            | -                | -                | -         |    -0.03 | Brave, Hagmeister, thomass1, zame, ZapR  |
|            2 |     4864 | 2025-11-07 | Boys N Da HUD      | W   | 0.199      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.199) |     2.03 | Brave, Hagmeister, thomass1, zame, ZapR  |
|            1 |     4874 | 2025-11-07 | Betclic            | W   | 0.199      | 0.335        | 0.026 (0.002)    | 0.602 (0.040)    | 1 (0.199) |     6.20 | Brave, Hagmeister, thomass1, zame, ZapR  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
