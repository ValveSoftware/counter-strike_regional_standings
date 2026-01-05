### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: bnox, Calyx, imoRR, maaryy, mASKED<br />
Global Rank: [238](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [144]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  582.3<br />
<br />
Final Rank Value (582.3) = Starting Rank Value (555.7) + Head To Head Adjustments (26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.7
- 400 + ( ( 0.078 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 555.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2468 | 2025-10-01 | GUN5               | L   | 0.560      | -            | -                | -                | -         |    -0.38 | bnox, Calyx, imoRR, mASKED, rim3   |
|           14 |     2696 | 2025-09-26 | Alliance           | L   | 0.526      | -            | -                | -                | -         |    -0.26 | bnox, Calyx, imoRR, mASKED, rim3   |
|           13 |     3658 | 2025-08-25 | Tricked            | L   | 0.312      | -            | -                | -                | -         |    -4.61 | bnox, Calyx, imoRR, maaryy, mASKED |
|           12 |     3677 | 2025-08-24 | Betclic            | L   | 0.305      | -            | -                | -                | -         |    -1.39 | bnox, Calyx, imoRR, maaryy, mASKED |
|           11 |     3723 | 2025-08-21 | 500                | W   | 0.286      | 0.435        | 0.024 (0.003)    | 1.000 (0.124)    | 0 (0.000) |     8.41 | bnox, Calyx, imoRR, maaryy, mASKED |
|           10 |     3761 | 2025-08-20 | CYBERSHOKE         | L   | 0.278      | -            | -                | -                | -         |    -0.09 | bnox, Calyx, imoRR, maaryy, mASKED |
|            9 |     3788 | 2025-08-18 | SINNERS            | W   | 0.266      | 0.384        | 0.190 (0.019)    | 0.793 (0.081)    | 0 (0.000) |     8.21 | bnox, Calyx, imoRR, maaryy, mASKED |
|            8 |     3941 | 2025-08-14 | Imperial Valkyries | W   | 0.240      | 0.384        | 0.028 (0.003)    | 0.216 (0.020)    | 0 (0.000) |     6.07 | bnox, Calyx, imoRR, maaryy, mASKED |
|            7 |     3992 | 2025-08-13 | ex-HEROIC Academy  | W   | 0.234      | 0.384        | 0.000 (0.000)    | 0.048 (0.004)    | 0 (0.000) |     3.41 | bnox, Calyx, imoRR, maaryy, mASKED |
|            6 |     4127 | 2025-08-10 | FAVBET             | L   | 0.214      | -            | -                | -                | -         |    -0.76 | bnox, Calyx, imoRR, maaryy, mASKED |
|            5 |     4180 | 2025-08-08 | Oramond            | L   | 0.200      | -            | -                | -                | -         |    -0.40 | bnox, Calyx, imoRR, maaryy, mASKED |
|            4 |     4186 | 2025-08-08 | Monte              | W   | 0.199      | 0.384        | 0.038 (0.003)    | 0.754 (0.058)    | 0 (0.000) |     6.15 | bnox, Calyx, imoRR, maaryy, mASKED |
|            3 |     4384 | 2025-07-27 | 33                 | L   | 0.119      | -            | -                | -                | -         |    -0.25 | bnox, Calyx, imoRR, maaryy, mASKED |
|            2 |     4439 | 2025-07-24 | NIP Impact         | W   | 0.099      | 0.384        | 0.059 (0.002)    | 0.277 (0.011)    | 0 (0.000) |     2.72 | bnox, Calyx, imoRR, maaryy, mASKED |
|            1 |     4446 | 2025-07-23 | 33                 | L   | 0.094      | -            | -                | -                | -         |    -0.19 | bnox, Calyx, imoRR, maaryy, mASKED |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
