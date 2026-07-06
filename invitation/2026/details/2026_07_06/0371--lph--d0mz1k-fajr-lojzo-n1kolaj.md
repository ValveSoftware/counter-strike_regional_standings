### Roster Details<br />
Team Name: LPH<br />
Roster: d0mZ1k, Fajr, lojzo, N1KOLAJ<br />
Global Rank: [371](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [230]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  424.2<br />
<br />
Final Rank Value (424.2) = Starting Rank Value (401.7) + Head To Head Adjustments (22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.7
- 400 + ( ( 0.001 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 401.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       10 | 2026-07-04 | Honvéd    | L   | 1.000      | -            | -                | -                | -         |    -3.62 | d0mZ1k, Fajr, KAD1M, lojzo, N1KOLAJ    |
|            4 |       29 | 2026-07-01 | eSuba     | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.074 (0.025)    | 0 (0.000) |    15.21 | d0mZ1k, Fajr, KAD1M, lojzo, N1KOLAJ    |
|            3 |       32 | 2026-07-01 | DEFEATERS | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.037 (0.012)    | 0 (0.000) |    15.20 | d0mZ1k, Fajr, KAD1M, lojzo, N1KOLAJ    |
|            2 |     3434 | 2026-03-23 | M1X KS    | L   | 0.501      | -            | -                | -                | -         |    -4.16 | d0mZ1k, Fajr, lojzo, N1KOLAJ, Snaxieee |
|            1 |     3531 | 2026-03-21 | Walczaki  | L   | 0.488      | -            | -                | -                | -         |    -0.19 | d0mZ1k, Fajr, lojzo, N1KOLAJ, Snaxieee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
