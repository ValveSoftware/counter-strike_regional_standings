### Roster Details<br />
Team Name: TDK<br />
Roster: ArtFr0st, Ax1Le, nafany, sugaR, Xant3r<br />
Global Rank: [53](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [39]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1246.4<br />
<br />
Final Rank Value (1246.4) = Starting Rank Value (1150.7) + Head To Head Adjustments (95.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.413[<sup>1</sup>](#table2)
- Bounty Collected: 0.359[<sup>2</sup>](#table1)
- Opponent Network: 0.346[<sup>2</sup>](#table1)
- LAN Wins: 0.458[<sup>2</sup>](#table1)

The average of these factors is 0.394<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1150.7
- 400 + ( ( 0.394 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1150.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |        4 | 2026-05-31 | DragonClaw           | L   | 1.000      | -            | -                | -                | -         |   -22.65 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           62 |       20 | 2026-05-31 | OG                   | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.50 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           61 |       68 | 2026-05-30 | Omega                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.54 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           60 |       77 | 2026-05-29 | TNC                  | W   | 1.000      | 0.396        | 0.022 (0.009)    | 1.000 (0.396)    | 0 (0.000) |     4.81 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           59 |      110 | 2026-05-28 | Nemesis              | W   | 1.000      | 0.143        | 0.141 (0.020)    | -                | 0 (0.000) |    19.92 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           58 |      150 | 2026-05-27 | Nemiga               | W   | 1.000      | 0.143        | 0.135 (0.019)    | -                | -         |    21.90 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           57 |      481 | 2026-05-19 | Nemiga               | L   | 1.000      | -            | -                | -                | -         |    -8.62 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           56 |      539 | 2026-05-16 | Lavked               | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |    12.61 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           55 |      596 | 2026-05-14 | fnatic               | L   | 1.000      | -            | -                | -                | -         |   -19.35 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           54 |      605 | 2026-05-14 | MOUZ NXT             | W   | 1.000      | 0.435        | -                | 0.814 (0.354)    | -         |     8.31 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           53 |      627 | 2026-05-13 | KOLESIE              | W   | 1.000      | 0.384        | 0.033 (0.013)    | -                | -         |    13.00 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           52 |      662 | 2026-05-12 | Sashi                | L   | 1.000      | -            | -                | -                | -         |   -15.65 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           51 |      736 | 2026-05-10 | Nuclear TigeRES      | L   | 1.000      | -            | -                | -                | -         |   -11.86 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           50 |      748 | 2026-05-10 | Lavked               | W   | 1.000      | 0.384        | -                | 1.000 (0.384)    | -         |     9.64 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           49 |      803 | 2026-05-08 | TNC                  | W   | 1.000      | -            | -                | -                | -         |     2.55 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           48 |      810 | 2026-05-08 | GenOne               | W   | 1.000      | 0.384        | -                | 0.916 (0.352)    | -         |     5.07 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           47 |      857 | 2026-05-05 | Famalicão            | W   | 1.000      | -            | -                | -                | -         |     2.74 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           46 |      888 | 2026-05-03 | INOX Division        | L   | 1.000      | -            | -                | -                | -         |   -20.83 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           45 |     1035 | 2026-04-30 | 100 Thieves          | L   | 0.987      | -            | -                | -                | -         |   -11.68 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           44 |     1319 | 2026-04-25 | SPARTA               | L   | 0.952      | -            | -                | -                | -         |   -18.23 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           43 |     1501 | 2026-04-18 | ex-RUBY              | W   | 0.906      | 0.435        | 0.033 (0.013)    | 0.989 (0.390)    | -         |     8.43 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           42 |     1521 | 2026-04-17 | Oxuji                | W   | 0.898      | 0.435        | -                | 0.790 (0.308)    | -         |    10.20 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           41 |     1539 | 2026-04-15 | MANA                 | W   | 0.887      | 0.435        | -                | 0.712 (0.274)    | -         |     5.47 | ArtFr0st, Ax1Le, nafany, sugaR, Xant3r |
|           40 |     1733 | 2026-04-07 | CYBERSHOKE Prospects | W   | 0.834      | -            | -                | -                | 1 (0.834) |     5.91 | Ax1Le, h1te, nafany, sugaR, Xant3r     |
|           39 |     1751 | 2026-04-07 | CYBERSHOKE Prospects | W   | 0.832      | -            | -                | -                | 1 (0.832) |     6.11 | Ax1Le, h1te, nafany, sugaR, Xant3r     |
|           38 |     1891 | 2026-04-04 | 1win                 | L   | 0.813      | -            | -                | -                | -         |   -11.27 | Ax1Le, h1te, nafany, sugaR, Xant3r     |
|           37 |     2040 | 2026-04-02 | SPARTA               | W   | 0.801      | 0.435        | 0.038 (0.013)    | 0.828 (0.288)    | 1 (0.801) |    11.12 | Ax1Le, h1te, nafany, sugaR, Xant3r     |
|           36 |     2071 | 2026-04-02 | eternal premium      | W   | 0.800      | -            | -                | -                | 1 (0.800) |     1.32 | Ax1Le, h1te, nafany, sugaR, Xant3r     |
|           35 |     2680 | 2026-03-24 | Ursa                 | L   | 0.741      | -            | -                | -                | -         |   -17.93 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           34 |     2758 | 2026-03-23 | TNC                  | W   | 0.734      | 0.384        | -                | 1.000 (0.282)    | -         |     5.23 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           33 |     2822 | 2026-03-22 | HAVU                 | W   | 0.728      | -            | -                | -                | -         |     3.59 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           32 |     2873 | 2026-03-21 | Nemesis              | L   | 0.721      | -            | -                | -                | -         |    -9.67 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           31 |     2980 | 2026-03-19 | Rebels               | W   | 0.708      | -            | -                | -                | -         |     8.41 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           30 |     3081 | 2026-03-17 | HYPERSPIRIT          | W   | 0.693      | -            | -                | -                | -         |     4.01 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           29 |     3637 | 2026-03-05 | SPARTA               | L   | 0.617      | -            | -                | -                | -         |   -10.19 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           28 |     3667 | 2026-03-05 | WW                   | L   | 0.614      | -            | -                | -                | -         |   -12.69 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           27 |     3727 | 2026-03-04 | 1win                 | W   | 0.606      | 0.333        | 0.088 (0.018)    | -                | 1 (0.606) |    10.47 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           26 |     3741 | 2026-03-04 | MUERTA               | W   | 0.605      | -            | -                | -                | 1 (0.605) |     0.32 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           25 |     3765 | 2026-03-03 | magic                | L   | 0.601      | -            | -                | -                | -         |    -2.81 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           24 |     3935 | 2026-02-27 | SPARTA               | L   | 0.574      | -            | -                | -                | -         |    -9.74 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           23 |     3959 | 2026-02-27 | K27                  | W   | 0.572      | 0.435        | 0.095 (0.024)    | -                | -         |    12.10 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           22 |     4036 | 2026-02-26 | DragonClaw           | W   | 0.565      | -            | -                | -                | -         |     3.33 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           21 |     4071 | 2026-02-25 | ex-RUBY              | W   | 0.559      | -            | -                | -                | -         |     3.90 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           20 |     4090 | 2026-02-24 | Alliance             | W   | 0.555      | 0.384        | 0.100 (0.021)    | -                | -         |    13.08 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           19 |     4126 | 2026-02-24 | Inner Circle         | W   | 0.552      | 0.435        | 0.054 (0.013)    | -                | -         |    11.98 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           18 |     4168 | 2026-02-23 | Hashiras             | W   | 0.545      | -            | -                | -                | -         |     1.61 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           17 |     4186 | 2026-02-22 | MOUZ NXT             | W   | 0.541      | -            | -                | -                | -         |     6.50 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           16 |     4237 | 2026-02-22 | ex-RUBY              | W   | 0.539      | -            | -                | -                | -         |     4.35 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           15 |     4285 | 2026-02-21 | MOUZ NXT             | W   | 0.533      | -            | -                | -                | -         |     7.18 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           14 |     4314 | 2026-02-20 | GenOne               | W   | 0.528      | -            | -                | -                | -         |     3.12 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           13 |     4341 | 2026-02-20 | Hashiras             | W   | 0.525      | -            | -                | -                | -         |     1.62 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           12 |     4419 | 2026-02-18 | Lavked               | W   | 0.514      | -            | -                | -                | -         |     3.13 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           11 |     4437 | 2026-02-18 | MOUZ NXT             | L   | 0.513      | -            | -                | -                | -         |    -9.58 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|           10 |     4449 | 2026-02-18 | Bushido Wildcats     | W   | 0.512      | -            | -                | -                | -         |     0.61 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|            9 |     4536 | 2026-02-16 | Rebels               | W   | 0.500      | -            | -                | -                | -         |     8.53 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|            8 |     4609 | 2026-02-15 | ASTRAL               | W   | 0.492      | -            | -                | -                | -         |     6.05 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|            7 |     4628 | 2026-02-14 | Enjoy                | W   | 0.488      | -            | -                | -                | -         |     1.18 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|            6 |     4664 | 2026-02-14 | Sangal               | W   | 0.486      | -            | -                | -                | -         |     4.68 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|            5 |     4712 | 2026-02-13 | OlyBet               | W   | 0.480      | -            | -                | -                | -         |     2.21 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|            4 |     4724 | 2026-02-13 | HAVU                 | W   | 0.479      | -            | -                | -                | -         |     4.40 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|            3 |     4748 | 2026-02-12 | cirahvi              | W   | 0.474      | -            | -                | -                | -         |     1.67 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|            2 |     4772 | 2026-02-12 | Famalicão            | W   | 0.472      | -            | -                | -                | -         |     1.82 | Ax1Le, nafany, sugaR, Xant3r, zorte    |
|            1 |     4794 | 2026-02-11 | Atreides             | W   | 0.467      | -            | -                | -                | -         |     3.25 | Ax1Le, nafany, sugaR, Xant3r, zorte    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,616.80)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-05-15 |      1.000 | $1,250.00      | $1,250.00       |
| 2026-04-07 |      0.834 | $1,080.00      | $900.71         |
| 2026-04-05 |      0.821 | $750.00        | $615.50         |
| 2026-03-27 |      0.761 | $1,250.00      | $951.10         |
| 2026-02-27 |      0.574 | $10,000.00     | $5,744.36       |
| 2026-02-24 |      0.555 | $12,000.00     | $6,655.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
