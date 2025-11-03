### Roster Details<br />
Team Name: kONO<br />
Roster: b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz<br />
Global Rank: [82](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [56]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  938.3<br />
<br />
Final Rank Value (938.3) = Starting Rank Value (869.5) + Head To Head Adjustments (68.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.295[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.5
- 400 + ( ( 0.250 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 869.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       40 | 2025-10-31 | ECSTATIC        | L   | 1.000      | -            | -                | -                | -         |    -5.48 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           39 |       47 | 2025-10-31 | ENCE Academy    | L   | 1.000      | -            | -                | -                | -         |   -21.73 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           38 |       60 | 2025-10-29 | ARCRED          | W   | 1.000      | 0.435        | 0.003 (0.001)    | 0.888 (0.386)    | 0 (0.000) |    11.78 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           37 |       71 | 2025-10-28 | Sashi           | L   | 1.000      | -            | -                | -                | -         |   -13.49 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           36 |      111 | 2025-10-26 | Phantom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.76 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           35 |      134 | 2025-10-25 | Zero Tenacity   | W   | 1.000      | 0.435        | 0.006 (0.003)    | 0.879 (0.382)    | 0 (0.000) |    18.99 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           34 |      146 | 2025-10-25 | MOUZ NXT        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.08 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           33 |      183 | 2025-10-23 | Oramond         | W   | 1.000      | 0.435        | 0.002 (0.001)    | 0.838 (0.364)    | 0 (0.000) |    16.07 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           32 |      197 | 2025-10-21 | EYEBALLERS      | L   | 1.000      | -            | -                | -                | -         |   -10.86 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           31 |      214 | 2025-10-20 | VRSoholics      | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.49 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           30 |      234 | 2025-10-18 | ENCE            | L   | 1.000      | -            | -                | -                | -         |    -3.83 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           29 |      250 | 2025-10-18 | CPH Wolves      | W   | 1.000      | 0.384        | 0.009 (0.003)    | 0.756 (0.290)    | 0 (0.000) |    14.02 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           28 |      259 | 2025-10-17 | Oramond         | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.838 (0.322)    | -         |    18.93 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           27 |      269 | 2025-10-17 | HubaBuba        | W   | 1.000      | -            | -                | -                | -         |     7.75 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           26 |      304 | 2025-10-16 | ARCRED          | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.888 (0.341)    | -         |    16.16 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           25 |      367 | 2025-10-14 | Nuclear TigeRES | L   | 1.000      | -            | -                | -                | -         |   -12.39 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           24 |      454 | 2025-10-10 | Leo             | W   | 1.000      | -            | -                | -                | -         |     8.35 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           23 |      507 | 2025-10-09 | FORZE Reload    | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.742 (0.285)    | -         |    14.74 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           22 |      663 | 2025-10-06 | 500             | L   | 1.000      | -            | -                | -                | -         |    -9.13 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           21 |      819 | 2025-10-03 | UNiTY           | W   | 0.992      | 0.344        | 0.002 (0.001)    | 0.431 (0.147)    | -         |     9.19 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           20 |      855 | 2025-10-02 | Y5              | W   | 0.986      | 0.344        | 0.003 (0.001)    | -                | -         |     9.91 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           19 |     1088 | 2025-09-26 | 500             | L   | 0.947      | -            | -                | -                | -         |    -9.84 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           18 |     1097 | 2025-09-26 | Capybara        | W   | 0.947      | -            | -                | -                | 1 (0.947) |     2.21 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           17 |     1117 | 2025-09-26 | Johnny Speeds   | L   | 0.945      | -            | -                | -                | -         |    -9.86 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           16 |     1779 | 2025-09-08 | Eternal Fire    | L   | 0.825      | -            | -                | -                | -         |   -11.86 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           15 |     1804 | 2025-09-07 | SENZA           | W   | 0.818      | -            | -                | -                | -         |     9.85 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           14 |     1818 | 2025-09-06 | Oramond         | L   | 0.814      | -            | -                | -                | -         |    -8.99 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           13 |     1826 | 2025-09-06 | Partizan        | W   | 0.813      | 0.303        | 0.029 (0.007)    | 0.987 (0.243)    | -         |    20.76 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           12 |     1867 | 2025-09-04 | FORZE Reload    | L   | 0.800      | -            | -                | -                | -         |   -12.78 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           11 |     1870 | 2025-09-04 | AMKAL           | L   | 0.799      | -            | -                | -                | -         |   -17.06 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|           10 |     1883 | 2025-09-03 | SENZA           | W   | 0.791      | -            | -                | -                | -         |     8.53 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|            9 |     1887 | 2025-09-02 | SPARTA          | W   | 0.785      | 0.333        | -                | 0.736 (0.193)    | -         |    11.57 | b0RUP, birdfromsky, Burmylov, Keoz, rilax        |
|            8 |     1919 | 2025-08-31 | Mousquetaires   | W   | 0.771      | -            | -                | -                | -         |     7.36 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|            7 |     2038 | 2025-08-27 | SPARTA          | L   | 0.745      | -            | -                | -                | -         |   -11.63 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|            6 |     2919 | 2025-07-19 | Washington      | L   | 0.486      | -            | -                | -                | -         |   -10.23 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi      |
|            5 |     2929 | 2025-07-19 | AimerLegion     | W   | 0.485      | -            | -                | -                | 1 (0.485) |     1.02 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi      |
|            4 |     2948 | 2025-07-18 | Gentle Mates    | L   | 0.481      | -            | -                | -                | -         |    -0.23 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi      |
|            3 |     3448 | 2025-06-14 | Inner Circle    | L   | 0.254      | -            | -                | -                | -         |    -0.68 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi      |
|            2 |     3464 | 2025-06-14 | VRSoholics      | W   | 0.252      | -            | -                | -                | 1 (0.252) |     2.61 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi      |
|            1 |     3480 | 2025-06-13 | fnatic          | L   | 0.247      | -            | -                | -                | -         |    -0.19 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,050.22)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-07-20 |      0.492 | $102.00        | $50.22          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
