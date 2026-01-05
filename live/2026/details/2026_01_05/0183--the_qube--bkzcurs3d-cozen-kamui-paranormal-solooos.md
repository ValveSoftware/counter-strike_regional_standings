### Roster Details<br />
Team Name: The QUBE<br />
Roster: bkzcurs3d, Cozen, Kamui, Paranormal, soloooS<br />
Global Rank: [183](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [22]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  702.1<br />
<br />
Final Rank Value (702.1) = Starting Rank Value (692.5) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.057[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.5
- 400 + ( ( 0.147 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 692.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1501 | 2025-10-27 | FengDa            | L   | 0.733      | -            | -                | -                | -         |    -3.92 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|           11 |     1560 | 2025-10-26 | BORING PLAYERS    | W   | 0.726      | 0.333        | 0.003 (0.001)    | 0.153 (0.037)    | 0 (0.000) |    14.50 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|           10 |     1613 | 2025-10-25 | GATERON           | W   | 0.719      | 0.333        | 0.001 (0.000)    | 0.108 (0.026)    | 0 (0.000) |    11.27 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            9 |     1678 | 2025-10-24 | DQZS              | W   | 0.713      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.86 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            8 |     1721 | 2025-10-23 | IHC               | L   | 0.706      | -            | -                | -                | -         |   -13.68 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            7 |     2447 | 2025-10-01 | Chinggis Warriors | L   | 0.563      | -            | -                | -                | -         |    -4.26 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            6 |     2593 | 2025-09-28 | Chinggis Warriors | W   | 0.538      | 0.333        | 0.021 (0.004)    | 0.321 (0.058)    | 1 (0.538) |    13.17 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            5 |     2597 | 2025-09-28 | Eruption          | L   | 0.538      | -            | -                | -                | -         |    -6.34 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            4 |     3554 | 2025-08-29 | Eruption          | L   | 0.339      | -            | -                | -                | -         |    -4.13 | Aceari, Cozen, Kamui, Paranormal, soloooS    |
|            3 |     3566 | 2025-08-29 | The Huns          | L   | 0.338      | -            | -                | -                | -         |    -0.85 | Aceari, Cozen, Kamui, Paranormal, soloooS    |
|            2 |     4707 | 2025-07-11 | HOTU              | L   | 0.013      | -            | -                | -                | -         |    -0.01 | Aceari, bladee, Cozen, Kamui, soloooS        |
|            1 |     4717 | 2025-07-11 | Underground       | W   | 0.011      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.06 | Aceari, bladee, Cozen, Kamui, soloooS        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,499.68)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-02 |      0.566 | $1,000.00      | $566.09         |
| 2025-09-28 |      0.539 | $1,250.00      | $674.26         |
| 2025-08-30 |      0.346 | $750.00        | $259.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
