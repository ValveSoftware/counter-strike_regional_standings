### Roster Details<br />
Team Name: Rare Atom<br />
Roster: ChildKing, L1haNg, Marek, Summer, Tiger<br />
Global Rank: [54](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [4]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  1189.1<br />
<br />
Final Rank Value (1189.1) = Starting Rank Value (1203.5) + Head To Head Adjustments (-14.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.453[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.106[<sup>2</sup>](#table1)
- LAN Wins: 0.719[<sup>2</sup>](#table1)

The average of these factors is 0.405<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1203.5
- 400 + ( ( 0.405 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1203.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       78 | 2025-12-30 | Morningstar       | W   | 1.000      | 0.368        | 0.026 (0.010)    | 0.352 (0.130)    | 1 (1.000) |    11.37 | chengking, ChildKing, L1haNg, Summer, Tiger |
|           39 |       79 | 2025-12-30 | FengDa            | W   | 1.000      | 0.368        | 0.026 (0.010)    | 0.363 (0.134)    | 1 (1.000) |     7.18 | chengking, ChildKing, L1haNg, Summer, Tiger |
|           38 |       81 | 2025-12-29 | Morningstar       | L   | 1.000      | -            | -                | -                | -         |   -20.21 | chengking, ChildKing, L1haNg, Summer, Tiger |
|           37 |       88 | 2025-12-27 | Just Swing        | W   | 1.000      | 0.368        | -                | 0.219 (0.080)    | 1 (1.000) |     2.59 | chengking, ChildKing, L1haNg, Summer, Tiger |
|           36 |      599 | 2025-11-25 | GamerLegion       | L   | 0.927      | -            | -                | -                | -         |    -4.78 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           35 |      629 | 2025-11-24 | Legacy            | L   | 0.921      | -            | -                | -                | -         |    -1.62 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           34 |      646 | 2025-11-24 | Imperial          | L   | 0.919      | -            | -                | -                | -         |    -5.92 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           33 |      760 | 2025-11-20 | Lynn Vision       | L   | 0.894      | -            | -                | -                | -         |   -10.67 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           32 |      849 | 2025-11-16 | Lynn Vision       | L   | 0.865      | -            | -                | -                | -         |   -11.25 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           31 |      874 | 2025-11-14 | Gentle Mates      | W   | 0.857      | 0.428        | 0.158 (0.058)    | 0.528 (0.194)    | 1 (0.857) |    22.33 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           30 |      925 | 2025-11-13 | Morningstar       | W   | 0.845      | 0.428        | 0.026 (0.009)    | 0.352 (0.128)    | 1 (0.845) |     9.15 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           29 |     1835 | 2025-10-17 | The Huns          | W   | 0.667      | 0.333        | 0.030 (0.007)    | 0.459 (0.102)    | -         |     9.05 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           28 |     1869 | 2025-10-16 | FengDa            | W   | 0.660      | 0.333        | 0.026 (0.006)    | 0.363 (0.080)    | -         |     5.53 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           27 |     1910 | 2025-10-15 | The Huns          | L   | 0.653      | -            | -                | -                | -         |   -11.82 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           26 |     2137 | 2025-10-08 | Morningstar       | W   | 0.606      | 0.333        | 0.026 (0.005)    | 0.352 (0.071)    | -         |     7.26 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           25 |     2250 | 2025-10-06 | FengDa            | W   | 0.593      | 0.333        | 0.026 (0.005)    | 0.363 (0.072)    | -         |     4.50 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           24 |     2312 | 2025-10-05 | GATERON           | W   | 0.586      | -            | -                | -                | -         |     1.10 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           23 |     2358 | 2025-10-04 | Morningstar       | L   | 0.580      | -            | -                | -                | -         |   -11.55 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           22 |     2402 | 2025-10-03 | FengDa            | W   | 0.572      | 0.303        | 0.026 (0.005)    | -                | 1 (0.572) |     4.39 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           21 |     2440 | 2025-10-02 | Change The Game   | W   | 0.565      | -            | -                | -                | 1 (0.565) |     1.68 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           20 |     2856 | 2025-09-20 | Chinggis Warriors | W   | 0.486      | -            | -                | -                | -         |     3.00 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           19 |     2890 | 2025-09-19 | The Huns          | W   | 0.480      | 0.333        | 0.030 (0.005)    | 0.459 (0.073)    | -         |     6.60 | ChildKing, L1haNg, Marek, Summer, Tiger     |
|           18 |     2925 | 2025-09-18 | Chinggis Warriors | L   | 0.473      | -            | -                | -                | -         |   -12.11 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|           17 |     3063 | 2025-09-14 | Take me away      | L   | 0.445      | -            | -                | -                | -         |   -13.68 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|           16 |     3203 | 2025-09-11 | Eruption          | W   | 0.426      | -            | -                | -                | -         |     1.18 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|           15 |     3307 | 2025-09-09 | FengDa            | W   | 0.413      | -            | -                | -                | -         |     3.05 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|           14 |     3347 | 2025-09-08 | BORING PLAYERS    | W   | 0.406      | -            | -                | -                | -         |     1.22 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|           13 |     3536 | 2025-08-29 | Lynn Vision       | L   | 0.344      | -            | -                | -                | -         |    -4.90 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|           12 |     3550 | 2025-08-29 | Lynn Vision       | L   | 0.339      | -            | -                | -                | -         |    -4.98 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|           11 |     3589 | 2025-08-28 | NomadS            | W   | 0.333      | -            | -                | -                | -         |     0.70 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|           10 |     3600 | 2025-08-28 | Just Swing        | W   | 0.331      | -            | -                | -                | 1 (0.331) |     0.80 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|            9 |     3617 | 2025-08-27 | Lynn Vision       | L   | 0.326      | -            | -                | -                | -         |    -4.90 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|            8 |     3660 | 2025-08-25 | WDNMD             | W   | 0.312      | -            | -                | -                | 1 (0.312) |     0.21 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|            7 |     3663 | 2025-08-24 | Pressure Monsters | W   | 0.310      | -            | -                | -                | 1 (0.310) |     0.11 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|            6 |     3954 | 2025-08-14 | Last Bullet       | W   | 0.239      | -            | -                | -                | -         |     0.63 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|            5 |     4057 | 2025-08-12 | Eruption          | W   | 0.226      | -            | -                | -                | -         |     0.60 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|            4 |     4112 | 2025-08-11 | BORING PLAYERS    | W   | 0.219      | -            | -                | -                | -         |     0.62 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|            3 |     4209 | 2025-08-06 | Astralis          | L   | 0.188      | -            | -                | -                | -         |    -0.59 | ChildKing, kaze, L1haNg, Summer, Tiger      |
|            2 |     4591 | 2025-07-16 | 3DMAX             | L   | 0.045      | -            | -                | -                | -         |    -0.08 | ChildKing, kaze, L1haNg, Summer, Trash      |
|            1 |     4609 | 2025-07-15 | paiN              | L   | 0.039      | -            | -                | -                | -         |    -0.16 | ChildKing, kaze, L1haNg, Summer, Trash      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,519.11)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-30 |      1.000 | $10,093.00     | $10,093.00      |
| 2025-11-16 |      0.865 | $9,830.00      | $8,498.29       |
| 2025-10-17 |      0.667 | $5,000.00      | $3,332.68       |
| 2025-10-04 |      0.580 | $1,000.00      | $579.51         |
| 2025-09-20 |      0.486 | $5,000.00      | $2,431.96       |
| 2025-08-31 |      0.352 | $1,044.00      | $367.65         |
| 2025-08-29 |      0.339 | $2,500.00      | $848.53         |
| 2025-07-20 |      0.074 | $5,000.00      | $367.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
