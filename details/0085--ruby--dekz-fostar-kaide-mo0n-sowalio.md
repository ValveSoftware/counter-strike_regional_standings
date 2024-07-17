### Roster Details<br />
Team Name: RUBY<br />
Roster: dekz, fostar, Kaide, mo0N, sowalio<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [85](../standings_global.md)<br />
Regional Rank: [61]( ../standings_europe.md)<br />
Final Rank Value:  951.3<br />
<br />
Final Rank Value (951.3) = Starting Rank Value (1007.9) + Head To Head Adjustments (-56.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.543[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.283<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1007.9
- 400 + ( ( 0.283 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1007.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       12 | 2024-07-17 | VP.Prodigy      | W   | 1.000      | 0.435        | 0.039 (0.017)    | 0.498 (0.217)    | 0 (0.000) |    13.72 | dekz, fostar, Kaide, mo0N, sowalio |
|           46 |       56 | 2024-07-16 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -16.08 | dekz, fostar, Kaide, mo0N, sowalio |
|           45 |      323 | 2024-06-16 | ARCRED          | W   | 0.993      | 0.450        | 0.057 (0.026)    | 0.354 (0.158)    | 0 (0.000) |    18.08 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           44 |      345 | 2024-06-15 | System5         | L   | 0.987      | -            | -                | -                | -         |   -24.29 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           43 |      357 | 2024-06-15 | Spirit Academy  | W   | 0.987      | 0.450        | 0.020 (0.009)    | -                | 0 (0.000) |     8.66 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           42 |      389 | 2024-06-14 | Zero Tenacity   | L   | 0.980      | -            | -                | -                | -         |    -9.20 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           41 |      397 | 2024-06-14 | LEON            | W   | 0.980      | 0.450        | -                | 0.160 (0.071)    | 0 (0.000) |     6.53 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           40 |      540 | 2024-06-09 | Insilio         | L   | 0.947      | -            | -                | -                | -         |   -11.86 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           39 |      685 | 2024-06-07 | SINNERS         | L   | 0.932      | -            | -                | -                | -         |   -12.33 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           38 |      794 | 2024-06-05 | ARCRED          | L   | 0.920      | -            | -                | -                | -         |   -15.36 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           37 |      812 | 2024-06-05 | Rare Atom       | L   | 0.918      | -            | -                | -                | -         |   -25.09 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           36 |      863 | 2024-06-03 | Insilio         | W   | 0.908      | 0.372        | 0.035 (0.012)    | 0.570 (0.193)    | 0 (0.000) |    14.27 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           35 |      872 | 2024-06-03 | HAVU            | L   | 0.906      | -            | -                | -                | -         |   -22.72 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           34 |      908 | 2024-06-01 | Zero Tenacity   | W   | 0.895      | 0.372        | 0.154 (0.051)    | 1.000 (0.333)    | 0 (0.000) |    18.95 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           33 |      972 | 2024-05-30 | Portugal        | W   | 0.881      | -            | -                | -                | 0 (0.000) |     5.07 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           32 |      982 | 2024-05-30 | FURIA           | L   | 0.879      | -            | -                | -                | -         |    -1.40 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           31 |     1026 | 2024-05-28 | MOUZ NXT        | L   | 0.867      | -            | -                | -                | -         |    -9.98 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           30 |     1066 | 2024-05-26 | Zero Tenacity   | L   | 0.853      | -            | -                | -                | -         |    -9.37 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           29 |     1077 | 2024-05-25 | B8              | L   | 0.848      | -            | -                | -                | -         |    -6.28 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           28 |     1117 | 2024-05-23 | Nexus           | W   | 0.833      | 0.435        | -                | 0.432 (0.156)    | 0 (0.000) |     6.49 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           27 |     1207 | 2024-05-21 | Endpoint        | W   | 0.819      | 0.435        | 0.018 (0.006)    | 0.498 (0.177)    | 0 (0.000) |    10.84 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           26 |     1546 | 2024-05-11 | 9 Pandas        | L   | 0.754      | -            | -                | -                | -         |    -9.20 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           25 |     1572 | 2024-05-10 | Nemiga          | W   | 0.745      | 0.435        | 0.498 (0.161)    | 0.725 (0.235)    | 0 (0.000) |    18.81 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           24 |     1629 | 2024-05-07 | Insilio         | W   | 0.727      | 0.435        | 0.035 (0.011)    | 0.570 (0.180)    | -         |    11.42 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           23 |     1672 | 2024-05-05 | HAVU            | W   | 0.713      | -            | -                | -                | -         |     4.70 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           22 |     1704 | 2024-05-03 | V1dar           | W   | 0.699      | -            | -                | -                | -         |     1.81 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           21 |     1759 | 2024-05-01 | GL Academy      | L   | 0.685      | -            | -                | -                | -         |   -16.06 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           20 |     1801 | 2024-04-29 | Permitta        | L   | 0.672      | -            | -                | -                | -         |   -11.42 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           19 |     1832 | 2024-04-27 | Astralis Talent | W   | 0.660      | -            | -                | -                | -         |     2.20 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           18 |     1994 | 2024-04-20 | Zero Tenacity   | L   | 0.613      | -            | -                | -                | -         |    -8.27 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           17 |     2074 | 2024-04-18 | Sashi           | L   | 0.600      | -            | -                | -                | -         |    -6.81 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           16 |     2083 | 2024-04-18 | Aurora          | W   | 0.600      | 0.143        | 0.514 (0.044)    | -                | -         |    18.35 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           15 |     2090 | 2024-04-18 | NOM             | W   | 0.600      | -            | -                | -                | -         |     1.42 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           14 |     2137 | 2024-04-17 | JANO            | W   | 0.592      | -            | -                | -                | -         |     3.04 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           13 |     2781 | 2024-03-19 | Sashi           | L   | 0.401      | -            | -                | -                | -         |    -4.36 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           12 |     2838 | 2024-03-16 | Permitta        | W   | 0.380      | 0.372        | -                | 0.794 (0.112)    | -         |     5.98 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           11 |     2974 | 2024-03-11 | Nexus           | L   | 0.347      | -            | -                | -                | -         |    -7.50 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           10 |     3010 | 2024-03-09 | Spirit Academy  | W   | 0.334      | -            | -                | -                | -         |     0.89 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            9 |     3037 | 2024-03-08 | ARCRED          | W   | 0.327      | 0.372        | 0.057 (0.007)    | -                | -         |     3.77 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            8 |     3267 | 2024-02-27 | Spirit Academy  | L   | 0.261      | -            | -                | -                | -         |    -7.61 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            7 |     3271 | 2024-02-27 | ALTERNATE aTTaX | W   | 0.260      | -            | -                | -                | -         |     4.69 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            6 |     3672 | 2024-02-09 | FORZE           | L   | 0.140      | -            | -                | -                | -         |    -2.46 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            5 |     3686 | 2024-02-08 | AMKAL           | L   | 0.134      | -            | -                | -                | -         |    -1.47 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            4 |     3688 | 2024-02-08 | ex-Guild Eagles | W   | 0.133      | -            | -                | -                | -         |     1.46 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            3 |     3856 | 2024-01-30 | Nemiga          | L   | 0.075      | -            | -                | -                | -         |    -0.42 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            2 |     3861 | 2024-01-30 | Permitta        | W   | 0.074      | -            | -                | -                | -         |     1.04 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            1 |     3868 | 2024-01-30 | Kosovo          | W   | 0.074      | -            | -                | -                | -         |     0.77 | dekz, Kaide, mo0N, sowalio, w1nt3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,344.30)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $30,000.00     | $29,791.60      |
| 2024-06-10 |      0.955 | $3,300.00      | $3,150.35       |
| 2024-05-12 |      0.761 | $2,000.00      | $1,521.37       |
| 2024-03-25 |      0.440 | $2,000.00      | $880.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
