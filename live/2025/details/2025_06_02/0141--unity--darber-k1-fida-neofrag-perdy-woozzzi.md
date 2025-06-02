### Roster Details<br />
Team Name: UNiTY<br />
Roster: darber, K1-FiDa, NEOFRAG, PerdY, woozzzi<br />
Global Rank: [141](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [82]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  688.4<br />
<br />
Final Rank Value (688.4) = Starting Rank Value (710.7) + Head To Head Adjustments (-22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.7
- 400 + ( ( 0.169 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 710.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      188 | 2025-05-18 | ex-Permitta       | L   | 1.000      | -            | -                | -                | -         |   -17.68 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi |
|           21 |      213 | 2025-05-17 | Fisher College    | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.301 (0.043)    | 0 (0.000) |    18.47 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi |
|           20 |      230 | 2025-05-16 | ex-Permitta       | L   | 1.000      | -            | -                | -                | -         |   -18.17 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi |
|           19 |      472 | 2025-05-07 | Fire Flux         | L   | 1.000      | -            | -                | -                | -         |   -11.14 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi |
|           18 |      501 | 2025-05-06 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -7.90 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi |
|           17 |      536 | 2025-05-04 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -9.18 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi |
|           16 |      576 | 2025-05-03 | JANO              | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.158 (0.023)    | 0 (0.000) |    15.55 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi |
|           15 |      594 | 2025-05-02 | Zero Tenacity     | L   | 0.996      | -            | -                | -                | -         |    -8.45 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi |
|           14 |      650 | 2025-04-30 | LA MASIA          | W   | 0.982      | 0.143        | 0.014 (0.002)    | 0.037 (0.005)    | 0 (0.000) |    12.53 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi |
|           13 |      681 | 2025-04-28 | ECLOT             | L   | 0.969      | -            | -                | -                | -         |    -6.24 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi |
|           12 |     1157 | 2025-04-06 | ECLOT             | L   | 0.824      | -            | -                | -                | -         |    -5.75 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|           11 |     1173 | 2025-04-05 | SINNERS           | L   | 0.819      | -            | -                | -                | -         |    -4.19 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|           10 |     1193 | 2025-04-04 | ECLOT             | W   | 0.812      | 0.321        | 0.130 (0.034)    | 0.775 (0.201)    | 1 (0.812) |    20.22 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|            9 |     3081 | 2025-02-08 | Iberian Soul      | L   | 0.443      | -            | -                | -                | -         |    -3.11 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|            8 |     3159 | 2025-02-05 | Astrum            | L   | 0.425      | -            | -                | -                | -         |    -2.52 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|            7 |     3190 | 2025-02-04 | Iberian Soul      | W   | 0.417      | 0.143        | 0.019 (0.001)    | 0.624 (0.037)    | 0 (0.000) |    10.22 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|            6 |     3321 | 2025-01-27 | Ninjas in Pyjamas | L   | 0.363      | -            | -                | -                | -         |    -0.29 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|            5 |     3325 | 2025-01-26 | FAVBET            | L   | 0.358      | -            | -                | -                | -         |    -3.38 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|            4 |     3584 | 2024-12-22 | 9INE              | L   | 0.123      | -            | -                | -                | -         |    -0.51 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|            3 |     3609 | 2024-12-19 | Insilio           | W   | 0.106      | 0.354        | 0.000 (0.000)    | 0.096 (0.004)    | 0 (0.000) |     0.78 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|            2 |     3617 | 2024-12-19 | Illuminar         | W   | 0.104      | 0.354        | 0.000 (0.000)    | 0.041 (0.002)    | 0 (0.000) |     0.89 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |
|            1 |     3625 | 2024-12-18 | Insilio           | L   | 0.097      | -            | -                | -                | -         |    -2.37 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($845.05)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-06 |      0.824 | $1,025.00      | $845.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
