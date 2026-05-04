### Roster Details<br />
Team Name: BRUTE<br />
Roster: hfah, majky, mASKED, nbqq, realzen<br />
Global Rank: [177](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [117]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  804.8<br />
<br />
Final Rank Value (804.8) = Starting Rank Value (737.9) + Head To Head Adjustments (66.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.075[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.9
- 400 + ( ( 0.182 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 737.9


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
|           31 |      174 | 2026-04-28 | STATE          | L   | 1.000      | -            | -                | -                | -         |    -7.87 | hfah, KAD1M, majky, nbqq, realzen       |
|           30 |      212 | 2026-04-27 | Ursa           | L   | 1.000      | -            | -                | -                | -         |    -4.87 | hfah, majky, mASKED, nbqq, realzen      |
|           29 |      272 | 2026-04-26 | RUSTEC         | L   | 1.000      | -            | -                | -                | -         |    -9.47 | hfah, KAD1M, majky, nbqq, realzen       |
|           28 |      334 | 2026-04-25 | playersclub    | W   | 1.000      | 0.303        | -                | 0.236 (0.072)    | 0 (0.000) |    12.30 | hfah, KAD1M, majky, nbqq, realzen       |
|           27 |      379 | 2026-04-24 | DONSTU         | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.370 (0.112)    | 0 (0.000) |    16.02 | hfah, KAD1M, majky, nbqq, realzen       |
|           26 |      419 | 2026-04-23 | Atreides       | W   | 1.000      | 0.303        | 0.002 (0.001)    | 0.396 (0.120)    | 0 (0.000) |    15.67 | hfah, majky, mASKED, nbqq, realzen      |
|           25 |      444 | 2026-04-22 | aimclub        | W   | 1.000      | 0.303        | -                | 0.381 (0.115)    | 0 (0.000) |    19.07 | hfah, majky, mASKED, nbqq, realzen      |
|           24 |      465 | 2026-04-20 | playersclub    | L   | 1.000      | -            | -                | -                | -         |   -20.16 | hfah, majky, mASKED, nbqq, realzen      |
|           23 |      493 | 2026-04-19 | Young Ninjas   | W   | 1.000      | 0.303        | 0.004 (0.001)    | 0.407 (0.123)    | 0 (0.000) |    20.77 | hfah, majky, mASKED, nbqq, realzen      |
|           22 |      723 | 2026-04-08 | Rune Eaters    | L   | 1.000      | -            | -                | -                | -         |   -15.66 | hfah, majky, mASKED, nbqq, realzen      |
|           21 |      753 | 2026-04-07 | Leo            | L   | 1.000      | -            | -                | -                | -         |    -8.70 | hfah, majky, mASKED, nbqq, realzen      |
|           20 |      792 | 2026-04-06 | Rune Eaters    | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.449 (0.173)    | 0 (0.000) |    15.51 | hfah, majky, mASKED, nbqq, realzen      |
|           19 |     2366 | 2026-03-11 | PsychoFace     | L   | 0.841      | -            | -                | -                | -         |    -3.95 | hfah, KAD1M, mASKED, realzen, Siko      |
|           18 |     2438 | 2026-03-09 | ex-FUT Academy | W   | 0.828      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     5.87 | hfah, KAD1M, mASKED, realzen, Siko      |
|           17 |     2668 | 2026-03-05 | CSDIILIT       | L   | 0.801      | -            | -                | -                | -         |   -11.04 | hfah, KAD1M, mASKED, realzen, Siko      |
|           16 |     3101 | 2026-02-24 | MANA           | L   | 0.741      | -            | -                | -                | -         |    -6.26 | hfah, KAD1M, mASKED, realzen, Siko      |
|           15 |     3123 | 2026-02-24 | 100 Thieves    | L   | 0.740      | -            | -                | -                | -         |    -1.75 | hfah, KAD1M, mASKED, realzen, Siko      |
|           14 |     3141 | 2026-02-24 | LAGUNA         | W   | 0.738      | -            | -                | -                | 1 (0.738) |     2.99 | hfah, KAD1M, mASKED, realzen, Siko      |
|           13 |     3284 | 2026-02-21 | KOLESIE        | L   | 0.720      | -            | -                | -                | -         |    -3.98 | hfah, KAD1M, mASKED, realzen, Siko      |
|           12 |     3405 | 2026-02-19 | ASTRAL         | L   | 0.705      | -            | -                | -                | -         |    -4.25 | hfah, KAD1M, mASKED, realzen, Siko      |
|           11 |     3525 | 2026-02-17 | illwill        | L   | 0.692      | -            | -                | -                | -         |    -1.67 | hfah, KAD1M, mASKED, realzen, Siko      |
|           10 |     3563 | 2026-02-16 | MOUZ NXT       | L   | 0.686      | -            | -                | -                | -         |    -3.27 | hfah, KAD1M, mASKED, realzen, Siko      |
|            9 |     3687 | 2026-02-14 | Fuzos          | W   | 0.672      | 0.384        | 0.004 (0.001)    | 0.357 (0.092)    | 0 (0.000) |    11.55 | hfah, KAD1M, mASKED, realzen, Siko      |
|            8 |     3841 | 2026-02-10 | home           | W   | 0.647      | -            | -                | -                | 0 (0.000) |     4.45 | hfah, KAD1M, mASKED, N1KOLAJ, realzen   |
|            7 |     3871 | 2026-02-09 | Bebop          | W   | 0.641      | 0.384        | 0.004 (0.001)    | 1.000 (0.246)    | -         |    11.99 | hfah, KAD1M, mASKED, realzen, Siko      |
|            6 |     4103 | 2026-02-01 | Acend          | W   | 0.586      | 0.396        | 0.028 (0.007)    | 0.759 (0.176)    | -         |    16.12 | hfah, KAD1M, mASKED, realzen, Siko      |
|            5 |     4213 | 2026-01-29 | ARCRED         | L   | 0.565      | -            | -                | -                | -         |    -1.29 | hfah, KAD1M, realzen, Siko, The eLiVe   |
|            4 |     4264 | 2026-01-27 | ALLINNERS      | W   | 0.551      | 0.435        | 0.001 (0.000)    | -                | -         |     7.28 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|            3 |     4290 | 2026-01-25 | ex-RUBY        | L   | 0.540      | -            | -                | -                | -         |    -3.57 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|            2 |     4318 | 2026-01-24 | AM             | L   | 0.534      | -            | -                | -                | -         |    -0.75 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|            1 |     4332 | 2026-01-24 | AaB            | W   | 0.532      | 0.396        | 0.014 (0.003)    | 0.847 (0.179)    | -         |    15.76 | hfah, KAD1M, mASKED, realzen, w4rden    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-26 |      1.000 | $500.00        | $500.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
