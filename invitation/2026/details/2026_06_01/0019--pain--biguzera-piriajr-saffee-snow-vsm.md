### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, piriajr, saffee, snow, vsm<br />
Global Rank: [19](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [4]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  1549.3<br />
<br />
Final Rank Value (1549.3) = Starting Rank Value (1536.7) + Head To Head Adjustments (12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.625[<sup>1</sup>](#table2)
- Bounty Collected: 0.586[<sup>2</sup>](#table1)
- Opponent Network: 0.273[<sup>2</sup>](#table1)
- LAN Wins: 0.902[<sup>2</sup>](#table1)

The average of these factors is 0.597<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1536.7
- 400 + ( ( 0.597 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1536.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      376 | 2026-05-21 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -4.80 | biguzera, piriajr, saffee, snow, vsm |
|           33 |      398 | 2026-05-21 | TYLOO             | W   | 1.000      | 1.000        | 0.094 (0.094)    | 0.530 (0.530)    | 1 (1.000) |     9.19 | biguzera, piriajr, saffee, snow, vsm |
|           32 |      421 | 2026-05-21 | BC.Game           | W   | 1.000      | 1.000        | 0.047 (0.047)    | -                | 1 (1.000) |     1.87 | biguzera, piriajr, saffee, snow, vsm |
|           31 |      456 | 2026-05-20 | M80               | L   | 1.000      | -            | -                | -                | -         |   -23.45 | biguzera, piriajr, saffee, snow, vsm |
|           30 |      565 | 2026-05-15 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -10.06 | biguzera, piriajr, saffee, snow, vsm |
|           29 |      611 | 2026-05-13 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -16.72 | biguzera, piriajr, saffee, snow, vsm |
|           28 |      654 | 2026-05-12 | FUT               | W   | 1.000      | 1.000        | 0.812 (0.812)    | 0.355 (0.355)    | 1 (1.000) |    21.79 | biguzera, piriajr, saffee, snow, vsm |
|           27 |      702 | 2026-05-11 | FaZe              | W   | 1.000      | 1.000        | 0.390 (0.390)    | 0.391 (0.391)    | 1 (1.000) |    12.05 | biguzera, piriajr, saffee, snow, vsm |
|           26 |     1798 | 2026-04-05 | Gaimin Gladiators | W   | 0.822      | -            | -                | -                | 1 (0.822) |     4.23 | biguzera, nqz, piriajr, snow, vsm    |
|           25 |     1862 | 2026-04-04 | Fluxo             | W   | 0.815      | -            | -                | -                | 1 (0.815) |     3.19 | biguzera, nqz, piriajr, snow, vsm    |
|           24 |     1892 | 2026-04-04 | ShindeN           | W   | 0.813      | 0.435        | -                | 0.625 (0.221)    | 1 (0.813) |     3.06 | biguzera, nqz, piriajr, snow, vsm    |
|           23 |     2142 | 2026-04-01 | Galorys           | W   | 0.794      | 0.435        | -                | 0.472 (0.163)    | 1 (0.794) |     2.08 | biguzera, nqz, piriajr, snow, vsm    |
|           22 |     2174 | 2026-04-01 | ALKA              | W   | 0.793      | -            | -                | -                | 1 (0.793) |     0.15 | biguzera, nqz, piriajr, snow, vsm    |
|           21 |     2327 | 2026-03-30 | Gaimin Gladiators | W   | 0.781      | -            | -                | -                | 1 (0.781) |     4.13 | biguzera, nqz, piriajr, snow, vsm    |
|           20 |     2371 | 2026-03-29 | 9z                | L   | 0.775      | -            | -                | -                | -         |   -10.08 | biguzera, nqz, piriajr, snow, vsm    |
|           19 |     2417 | 2026-03-29 | ShindeN           | W   | 0.773      | 0.392        | -                | 0.625 (0.189)    | -         |     3.33 | biguzera, nqz, piriajr, snow, vsm    |
|           18 |     2536 | 2026-03-27 | LP                | W   | 0.763      | 0.392        | 0.060 (0.018)    | 0.886 (0.265)    | -         |     2.66 | biguzera, nqz, piriajr, snow, vsm    |
|           17 |     2540 | 2026-03-27 | Bounty Hunters    | W   | 0.762      | 0.392        | -                | 0.653 (0.195)    | -         |     1.61 | biguzera, nqz, piriajr, snow, vsm    |
|           16 |     3437 | 2026-03-09 | FURIA             | L   | 0.641      | -            | -                | -                | -         |    -5.12 | biguzera, nqz, piriajr, snow, vsm    |
|           15 |     3549 | 2026-03-08 | Aurora            | L   | 0.632      | -            | -                | -                | -         |    -4.78 | biguzera, nqz, piriajr, snow, vsm    |
|           14 |     3592 | 2026-03-07 | FaZe              | W   | 0.626      | 0.805        | 0.390 (0.196)    | 0.391 (0.197)    | -         |    10.38 | biguzera, nqz, piriajr, snow, vsm    |
|           13 |     3608 | 2026-03-06 | The MongolZ       | L   | 0.621      | -            | -                | -                | -         |    -3.81 | biguzera, nqz, piriajr, snow, vsm    |
|           12 |     3709 | 2026-03-04 | G2                | W   | 0.608      | 0.613        | 0.470 (0.175)    | 0.613 (0.228)    | -         |    13.42 | biguzera, nqz, piriajr, snow, vsm    |
|           11 |     3761 | 2026-03-03 | Passion UA        | W   | 0.601      | -            | -                | -                | -         |     4.13 | biguzera, nqz, piriajr, snow, vsm    |
|           10 |     3819 | 2026-03-02 | PARIVISION        | L   | 0.593      | -            | -                | -                | -         |    -3.45 | biguzera, nqz, piriajr, snow, vsm    |
|            9 |     3841 | 2026-03-01 | 3DMAX             | W   | 0.588      | 0.613        | 0.241 (0.087)    | -                | -         |     8.48 | biguzera, nqz, piriajr, snow, vsm    |
|            8 |     4534 | 2026-02-16 | G2                | L   | 0.500      | -            | -                | -                | -         |    -4.50 | biguzera, nqz, piriajr, snow, vsm    |
|            7 |     4602 | 2026-02-15 | Aurora            | L   | 0.493      | -            | -                | -                | -         |    -3.63 | biguzera, nqz, piriajr, snow, vsm    |
|            6 |     4637 | 2026-02-14 | The MongolZ       | L   | 0.487      | -            | -                | -                | -         |    -3.01 | biguzera, nqz, piriajr, snow, vsm    |
|            5 |     5158 | 2026-01-30 | Aurora            | L   | 0.387      | -            | -                | -                | -         |    -2.97 | biguzera, nqz, piriajr, snow, vsm    |
|            4 |     5192 | 2026-01-29 | B8                | W   | 0.380      | 0.783        | 0.329 (0.098)    | -                | -         |     7.63 | biguzera, nqz, piriajr, snow, vsm    |
|            3 |     5216 | 2026-01-28 | Astralis          | L   | 0.373      | -            | -                | -                | -         |    -3.01 | biguzera, nqz, piriajr, snow, vsm    |
|            2 |     5575 | 2026-01-17 | HEROIC            | L   | 0.299      | -            | -                | -                | -         |    -5.92 | biguzera, nqz, piriajr, snow, vsm    |
|            1 |     5615 | 2026-01-16 | BetBoom           | W   | 0.293      | 0.895        | 0.203 (0.053)    | -                | -         |     4.48 | biguzera, nqz, piriajr, snow, vsm    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($156,528.80)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      1.000 | $30,000.00     | $30,000.00      |
| 2026-05-17 |      1.000 | $67,500.00     | $67,500.00      |
| 2026-04-05 |      0.822 | $30,000.00     | $24,657.96      |
| 2026-03-30 |      0.782 | $3,940.00      | $3,082.56       |
| 2026-03-10 |      0.648 | $21,500.00     | $13,932.98      |
| 2026-02-22 |      0.541 | $12,500.00     | $6,758.68       |
| 2026-01-30 |      0.388 | $4,500.00      | $1,744.06       |
| 2026-01-18 |      0.308 | $28,750.00     | $8,852.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
